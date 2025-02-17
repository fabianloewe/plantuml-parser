export class Comment {
  constructor (
    public comment: string,
  ) {
    this.comment = comment || '';
  }
}

export class Note {
  constructor (
    public text: string,
    public of: string = '',
  ) {
    this.text = text || '';
    this.of = of || '';
  }
}

export class Component {
  constructor (
    public name: string,
    public title: string,
  ) {
  }
}

export class UseCase {
  constructor (
    public name: string,
    public title: string,
  ) {
  }
}

export type Accessor = ('-' | '#' | '~' | '+')
export class Method {
  constructor (
    public name: string,
    public isStatic: boolean,
    public accessor: Accessor,
    public returnType: string,
    public _arguments: string,
  ) {
    this.isStatic = !!isStatic;
    this.accessor = accessor || '+';
    this.returnType = returnType || 'void';
    this._arguments = _arguments || '';
  }
}

export class MemberVariable {
  constructor (
    public name: string,
    public isStatic: boolean,
    public accessor: Accessor,
    public type: string = '',
  ) {
    this.isStatic = !!isStatic;
    this.accessor = accessor || '+';
    this.type = type || '';
  }
}

export type Member = (Method | MemberVariable)
export class Enum {
  constructor (
    public name: string,
    public title: string,
    public members: Member[] = [],
    public extends_: string[] = [],
    public implements_: string[] = [],
    public generics: string[] = [],
    public stereotypes: string[] = [],
  ) {
    this.members = members || [];
    this.extends_ = extends_ || [];
    this.implements_ = implements_ || [];
    this.generics = generics || [];
    this.stereotypes = stereotypes || [];
  }
}

export class Interface {
  constructor (
    public name: string,
    public title: string,
    public members: Member[] = [],
    public extends_: string[] = [],
    public implements_: string[] = [],
    public generics: string[] = [],
    public stereotypes: string[] = [],
  ) {
    this.members = members || [];
    this.extends_ = extends_ || [];
    this.implements_ = implements_ || [];
    this.generics = generics || [];
    this.stereotypes = stereotypes || [];
  }
}

export class Class {
  constructor (
    public name: string,
    public title: string,
    public isAbstract: boolean,
    public members: Member[] = [],
    public extends_: string[] = [],
    public implements_: string[] = [],
    public generics: string[] = [],
    public stereotypes: string[] = [],
  ) {
    this.isAbstract = !!isAbstract;
    this.members = members || [];
    this.extends_ = extends_ || [];
    this.implements_ = implements_ || [];
    this.generics = generics || [];
    this.stereotypes = stereotypes || [];
  }
}

export type GroupType = ('package' | 'node' | 'folder' | 'frame' | 'cloud' | 'database')
export class Group {
  constructor (
    public name: string,
    public title: string,
    public type: GroupType,
    public elements: UMLElement[],
  ) {
  }
}

export type RelationshipArrowHead = (
  | ''
  | '<|'
  | '|>'
  | '*'
  | 'o'
  | '<'
  | '>'
  | '#'
  | 'x'
  | '}'
  | '{'
  | '+'
  | '^'
  | '()'
  | '('
  | ')'
);
export type RelationshipArrowBody = (
  | '-'
  | '.'
);
export class Relationship {
  constructor (
    public left: string,
    public right: string,
    public leftType: string,
    public rightType: string,
    public leftArrowHead: RelationshipArrowHead,
    public rightArrowHead: RelationshipArrowHead,
    public leftArrowBody: RelationshipArrowBody,
    public rightArrowBody: RelationshipArrowBody,
    public leftCardinality: string,
    public rightCardinality: string,
    public label: string,
    public hidden: boolean,
  ) {
    this.leftType = leftType || '';
    this.rightType = rightType || '';
    this.leftArrowHead = leftArrowHead || '';
    this.rightArrowHead = rightArrowHead || '';
    this.leftArrowBody = leftArrowBody || '-';
    this.rightArrowBody = rightArrowBody || '-';
    this.leftCardinality = leftCardinality || '';
    this.rightCardinality = rightCardinality || '';
    this.label = label || '';
    this.hidden = !!hidden;
  }
}

export type Stdlib_C4_Context_Type = ('Person' | 'Person_Ext' | 'System' | 'System_Ext' | 'SystemDb' | 'SystemQueue' | 'SystemDb_Ext' | 'SystemQueue_Ext');
export class Stdlib_C4_Context {
  constructor (
    public type_: { source: string, name: Stdlib_C4_Context_Type },
    public alias: string,
    public label: string,
    public descr: string = '',
    public sprite: string = '',
    public tags: string = '',
    public link: string = '',
  ) {
    this.descr = descr || undefined;
    this.sprite = sprite || undefined;
    this.tags = tags || undefined;
    this.link = link || undefined;
  }
}

export type Stdlib_C4_Container_Component_Type = ('ContainerQueue_Ext' | 'ContainerQueue' | 'ContainerDb_Ext' | 'ContainerDb' | 'Container_Ext' | 'Container' | 'ComponentQueue_Ext' | 'ComponentQueue' | 'ComponentDb_Ext' | 'ComponentDb' | 'Component_Ext' | 'Component');
export class Stdlib_C4_Container_Component {
  constructor (
    public type_: { source: string, name: Stdlib_C4_Container_Component_Type },
    public alias: string,
    public label: string,
    public techn: string = '',
    public descr: string = '',
    public sprite: string = '',
    public tags: string = '',
    public link: string = '',
  ) {
    this.techn = techn || undefined;
    this.descr = descr || undefined;
    this.sprite = sprite || undefined;
    this.tags = tags || undefined;
    this.link = link || undefined;
  }
}

export type Stdlib_C4_Boundary_Type = ('Boundary' | 'Enterprise_Boundary' | 'System_Boundary' | 'Container_Boundary');
export class Stdlib_C4_Boundary {
  constructor (
    public type_: { source: string, name: Stdlib_C4_Boundary_Type },
    public alias: string,
    public label: string,
    public tags: string,
    public link: string,
    public elements: UMLElement[],
  ) {
    this.tags = tags || undefined;
    this.link = link || undefined;
  }
}

export type Stdlib_C4_Dynamic_Rel_Type = ('Rel' | 'BiRel' | 'Rel_Back' | 'Rel_Neighbor' | 'BiRel_Neighbor' | 'Rel_Back_Neighbor' | 'Rel_D' | 'Rel_Down' | 'BiRel_D' | 'BiRel_Down' | 'Rel_U' | 'Rel_Up' | 'BiRel_U' | 'BiRel_Up' | 'Rel_L' | 'Rel_Left' | 'BiRel_L' | 'BiRel_Left' | 'Rel_R' | 'Rel_Right' | 'BiRel_R' | 'BiRel_Right');
export class Stdlib_C4_Dynamic_Rel {
  constructor (
    public type_: { source: string, name: Stdlib_C4_Dynamic_Rel_Type },
    public from: string,
    public to: string,
    public label: string,
    public techn: string = '',
    public descr: string = '',
    public sprite: string = '',
    public tags: string = '',
    public link: string = '',
  ) {
    this.techn = techn || undefined;
    this.descr = descr || undefined;
    this.sprite = sprite || undefined;
    this.tags = tags || undefined;
    this.link = link || undefined;
  }
}

export type Stdlib_C4_Deployment_Type = ('Deployment_Node' | 'Deployment_Node_L' | 'Deployment_Node_R' | 'Node_L' | 'Node_R' | 'Node');
export class Stdlib_C4_Deployment {
  constructor (
    public type_: { source: string, name: Stdlib_C4_Deployment_Type },
    public alias: string,
    public label: string,
    public type: string = '',
    public descr: string = '',
    public sprite: string = '',
    public tags: string = '',
    public link: string = '',
  ) {
    this.type = type || undefined;
    this.descr = descr || undefined;
    this.sprite = sprite || undefined;
    this.tags = tags || undefined;
    this.link = link || undefined;
  }
}

export class Stdlib_C4_Rel {
  constructor (
    public type_: { source: string, name: string },
    public alias1: string,
    public alias2: string,
    public label: string,
    public direction: string,
    public techn: string = '',
  ) {
    this.techn = techn || undefined;
  }
}

export type ActivityElement = (
  | Activity
  | IfElseStatement
  | ForkStatement
)

export class StartActivity {
  public text: string;

  constructor() { 
    this.text = 'start';
  }
}

export class EndActivity {
  public text: string;
  
  constructor() { 
    this.text = 'end';
  }
}

export class StopActivity {
  public text: string;
  
  constructor() { 
    this.text = 'stop';
  }
}

export class KillActivity {
  public text: string;
  
  constructor() { 
    this.text = 'kill';
  }
}

export class DetachActivity {
  public text: string;
  
  constructor() { 
    this.text = 'detach';
  }
}

export class Activity {
  constructor (
    public text: string,
  ) { }
}

export class IfElseStatement {
  public activityType = 'if';
  constructor (
    public condition: string,
    public ifLabel: string | undefined,
    public ifActivities: ActivityElement[],
    public elseLabel: string | undefined,
    public elseActivities: ActivityElement[],
  ) { }
}

export class CaseStatement {
  constructor (
    public condition: string,
    public activities: ActivityElement[],
  ) { }
}

export class SwitchStatement {
  public activityType = 'switch';
  constructor (
    public test: string,
    public cases: CaseStatement[],
  ) { }
}

export class ForkStatement {
  public activityType = 'fork';
  constructor (
    public forks: ActivityElement[][],
    public endsWith: 'fork' | 'merge',
    public endForkLabel: string | undefined,
  ) { }
}

export class RepeatStatement {
  public activityType = 'repeat';
  constructor (
    public activities: ActivityElement[],
    public backward: Activity | undefined,
    public condition: string,
    public trueLabel: string | undefined,
    public falseLabel: string | undefined,
  ) { }
}

export class WhileStatement {
  public activityType = 'while';
  constructor (
    public condition: string,
    public activities: ActivityElement[],
    public whileLabel: string | undefined,
    public endLabel: string | undefined,
  ) { }
}

export type UMLElement = (
  | Note
  | Component
  | UseCase
  | Enum
  | Interface
  | Class
  | Group
  | Relationship
  | Stdlib_C4_Context
  | Stdlib_C4_Container_Component
  | Stdlib_C4_Boundary
  | Stdlib_C4_Dynamic_Rel
  | Stdlib_C4_Deployment
  | Stdlib_C4_Rel
  | StartActivity
  | ActivityElement
);

export class Diagram {
  constructor (
    public elements: UMLElement[],
    public id?: string,
  ) { }
}

export class UML {
  constructor (
    public elements: UMLElement[],
  ) { }
}

export class File {
  constructor (
    public name: string,
    public diagrams: Diagram[],
  ) {
    this.diagrams = diagrams || [];
  }
}
