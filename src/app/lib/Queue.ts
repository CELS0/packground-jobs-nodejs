import Queue from 'bull';
import { redisConfig } from '../../config/redis'

import RegistrationMail from '../jobs/RegistrationMail'

import * as jobs from '../jobs'

const queues = Object.values(jobs).map(job => ({
  bull: new Queue(job.key, RegistrationMail.key, {
    redis: {
      host: "",
      port: 6379,
    },
  }),
  name: job.key,
  handle: job.handle,
}))

export default {
  queues,
  add(name: string, data: any) {
    const queue = this.queues.find(queue => queue.name === name)

    return queue.bull.add(data)
  },
  process() {
    return this.queues.forEach(queue => {
      queue.bull.process(queue.handle)

      queue.bull.on('failed', (job: any, err: any) => {
        console.log('Job failed', queue.key, job.data)
        console.log('Erro: ', err)
      })
    })
  }
}