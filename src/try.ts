/* eslint-disable id-length */
import path from 'path'
import { BpmnController } from './controller/bpmn.controller'
import { InputController } from './controller/input.controller'
import { BPMN } from './enum/bpmn.enum'
import canvas, {
  Config,
  MathController,
  CanvasController,
  BackgroundController,
  RectangleController,
} from '@generative-arts/canvas-kit'
import { OutputController } from './controller/output.controller'

async function run() {
  const bpmnXml = await InputController.read(
    path.resolve(__dirname, '..', 'bpmn', 'example.bpmn'),
  )
  /*get numbers from diagram */
  const bpmnController = new BpmnController(bpmnXml)
  console.log(`# Tasks: ${bpmnController.count(BPMN.TASK)}`)
  const parallelGateway = bpmnController.count(BPMN.PARALLEL_GATEWAY)
  const tasks = bpmnController.count(BPMN.TASK)

  let config: Config = {
    width: 1000,
    height: 1000,
    colors: ['#E41749', '#F5587B', '#FF8A5C', '#FFF591'],
  }
  config = canvas.CanvasController.init(config)

  if (parallelGateway === 0) {
    config = canvas.BackgroundController.fill(config, 'white')
  } else {
    config = canvas.BackgroundController.fill(config, 'black')
  }

  for (let i = 0; i < tasks; i += 0.5) {
    canvas.RectangleController.rectangle(config, {
      start: { x: i * 2, y: i * MathController.random(0, tasks) },
      end: { x: 100, y: 100 },
      fillColor:
        config.colors[MathController.random(0, config.colors.length - 1)],
    })
  }

  await OutputController.save(
    config,
    path.resolve(__dirname, '..', 'output', 'bpmn.png'),
  )
}

run()
