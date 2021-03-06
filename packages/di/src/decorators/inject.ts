import {DecoratorTypes, getDecoratorType, Metadata, Store, UnsupportedDecoratorType} from "@tsed/core";
import {INJECTABLE_PROP} from "../constants";

/**
 * Inject a provider to another provider.
 *
 * Use this decorator to inject a custom provider on constructor parameter or property.
 *
 * ```typescript
 * @Injectable()
 * export class MyService {
 *   @Inject(CONNECTION)
 *   connection: CONNECTION;
 * }
 * ```
 *
 * @param symbol
 * @returns {Function}
 * @decorator
 */
export function Inject(symbol?: any): Function {
  return (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<Function> | number): any => {
    const bindingType = getDecoratorType([target, propertyKey, descriptor], true);

    switch (bindingType) {
      case DecoratorTypes.PARAM:
      case DecoratorTypes.PARAM_CTOR:
        if (symbol) {
          const paramTypes = Metadata.getParamTypes(target, propertyKey);

          paramTypes[descriptor as number] = symbol;
          Metadata.setParamTypes(target, propertyKey, paramTypes);
        }
        break;

      case DecoratorTypes.PROP:
        Store.from(target).merge(INJECTABLE_PROP, {
          [propertyKey]: {
            bindingType,
            propertyKey,
            useType: symbol || Metadata.getType(target, propertyKey)
          }
        });
        break;

      case DecoratorTypes.METHOD:
        Store.from(target).merge(INJECTABLE_PROP, {
          [propertyKey]: {
            bindingType,
            propertyKey
          }
        });

        return descriptor;

      default:
        throw new UnsupportedDecoratorType(Inject, [target, propertyKey, descriptor]);
    }
  };
}
