import type { Schema, Struct } from '@strapi/strapi';

export interface ExampleCmponentComponentExample
  extends Struct.ComponentSchema {
  collectionName: 'components_example_cmponent_component_examples';
  info: {
    displayName: 'Component example';
    icon: 'apps';
  };
  attributes: {
    birth_date: Schema.Attribute.Date;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'example-cmponent.component-example': ExampleCmponentComponentExample;
    }
  }
}
