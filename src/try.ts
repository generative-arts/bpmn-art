/* eslint-disable id-length */
import path from 'path'
import { BpmnController } from './controller/bpmn.controller'
import { InputController } from './controller/input.controller'
import { BPMN } from './enum/bpmn.enum'

async function run() {
  const bpmnXml = await InputController.read(
    path.resolve(__dirname, '..', 'bpmn', 'example.bpmn'),
  )
  const bpmnController = new BpmnController(bpmnXml)
  console.log(`# Tasks: ${bpmnController.count(BPMN.TASK)}`)
}

run()
