'use client'

import { FC, useEffect, useState } from 'react'

import { delay } from 'es-toolkit'

import { Button } from 'core/components/button'

import { checkStatus } from '../../client/status-api'
import { Status } from '../../types'

export const CurrentStatus: FC = () => {
  const [status, setStatus] = useState<Status>('loading')

  const handleCheckStatus = async (): Promise<void> => {
    setStatus('loading')

    const currentStatus = await checkStatus()
    await delay(1000)

    setStatus(currentStatus ? 'ok' : 'error')
  }

  useEffect(() => {
    void handleCheckStatus()
  }, [])

  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Status: {status}</h1>
      <Button onClick={handleCheckStatus} disabled={status === 'loading'}>
        Check Status
      </Button>
    </div>
  )
}
