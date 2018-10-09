// @flow

export type ParserReturnValueType = {|
  status?: boolean,
  index?: {|
    line: number,
    column: number
  |},
  expected?: Array<SourceCodeType>, // eslint-disable-line no-use-before-define
  value: NodeType // eslint-disable-line no-use-before-define
|};

export type PrimitiveNodeType = {|
  name: 'primitive',
  value: string
|};

export type IdentifierNodeType = {|
  name: 'identifier',
  value: string
|};

export type TupleNodeType = {|
  name: 'tuple',
  value: [PrimitiveNodeType, PrimitiveNodeType]
|};

export type InputNodeType = {|
  name: 'input',
  value: '$'
|};

export type InputPropNodeType = {|
  name: 'inputProp',
  value: string
|};

export type ListCoreNodeType = {|
  name: 'listCore',
  value: Array<NodeType> // eslint-disable-line no-use-before-define
|};

export type ListNodeType = {|
  name: 'list',
  value: Array<NodeType> // eslint-disable-line no-use-before-define
|};

export type ParenthesesNodeType = {|
  name: 'parentheses',
  value: NodeType // eslint-disable-line no-use-before-define
|};

export type ObjectNodeType = {|
  name: 'object',
  value: Array<NodeType> // eslint-disable-line no-use-before-define
|};

export type PipeNodeType = {|
  name: 'pipe',
  value: {|
    left: NodeType, // eslint-disable-line no-use-before-define
    right: NodeType // eslint-disable-line no-use-before-define
  |}
|};

export type ValuePropNodeType = {|
  name: 'valueProp',
  value: {
    left: NodeType, // eslint-disable-line no-use-before-define
    right: string
  }
|};

export type FunctionCallNodeType = {|
  name: 'functionCall',
  value: {
    left: IdentifierNodeType,
    right: NodeType // eslint-disable-line no-use-before-define
  }
|};

export type FunctionCallLambdaNodeType = {|
  name: 'functionCallLambda',
  value: {
    left: IdentifierNodeType,
    right: NodeType // eslint-disable-line no-use-before-define
  }
|};

export type ProjectionNodeType = {|
  name: 'projection',
  value: {
    left: NodeType, // eslint-disable-line no-use-before-define
    right: ListNodeType // eslint-disable-line no-use-before-define
  }
|};

export type NodeType =
  | PrimitiveNodeType
  | TupleNodeType
  | InputNodeType
  | InputNodeType
  | InputPropNodeType
  | ListNodeType
  | PipeNodeType
  | ParenthesesNodeType
  | ObjectNodeType
  | ValuePropNodeType
  | FunctionCallNodeType
  | FunctionCallLambdaNodeType
  | ProjectionNodeType;

export type OutputType = mixed => mixed;
export type SourceCodeType = string;
export type GeneratedCodeType = string;
export type ParserType = SourceCodeType => ParserReturnValueType;
