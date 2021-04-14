export enum BPMN {
  DEFINITIONS = 'bpmn:definitions',
  PROCESS = 'bpmn:process',
  SEQUENCE_FLOW = 'bpmn:sequenceFlow',
  EXTENSION_ELEMENTS = 'bpmn:extensionElements',
  OUTGOING = 'bpmn:outgoing',
  INCOMING = 'bpmn:incoming',
  CONDITION_EXPRESSION = 'bpmn:conditionExpression',
  MESSAGE_EVENT_DEFINITION = 'bpmn:messageEventDefinition',
  MESSAGE = 'bpmn:message',
  TIMER_EVENT_DEFINITION = 'bpmn:timerEventDefinition',
  TIMER_DURATION = 'bpmn:timeDuration',
  START_EVENT = 'bpmn:startEvent',
  END_EVENT = 'bpmn:endEvent',
  INTERMEDIATE_CATCH_EVENT = 'bpmn:intermediateCatchEvent',
  SERVICE_TASK = 'bpmn:serviceTask',
  TASK = 'bpmn:task',
  USER_TASK = 'bpmn:userTask',
  MANUAL_TASK = 'bpmn:manualTask',
  EXCLUSIVE_GATEWAY = 'bpmn:exclusiveGateway',
  PARALLEL_GATEWAY = 'bpmn:parallelGateway',
}
