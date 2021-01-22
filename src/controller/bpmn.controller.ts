import xml2json from 'xml2json'
import { BPMN } from '../enum/bpmn.enum'

export class BpmnController {
  private bpmnProcess
  private bpmnMessages

  constructor(bpmnXml: string) {
    const bpmnJson = JSON.parse(xml2json.toJson(bpmnXml, { reversible: true }))
    this.bpmnProcess = bpmnJson[BPMN.DEFINITIONS][BPMN.PROCESS]
    this.bpmnMessages = bpmnJson[BPMN.DEFINITIONS][BPMN.MESSAGE]
  }

  public count(element: BPMN) {
    if (element === BPMN.MESSAGE) {
      if (this.bpmnMessages) {
        return this.bpmnMessages.length > 0 ? this.bpmnMessages.length : 1
      } else {
        return 0
      }
    } else if (this.bpmnProcess[element]) {
      return this.bpmnProcess[element].length > 0
        ? this.bpmnProcess[element].length
        : 1
    } else {
      return 0
    }
  }
}
