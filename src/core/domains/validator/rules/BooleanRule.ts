
import AbstractRule from "@src/core/domains/validator/abstract/AbstractRule";
import { IRule } from "@src/core/domains/validator/interfaces/IRule";

class BooleanRule extends AbstractRule implements IRule {

    protected name: string = 'is_boolean'

    protected errorTemplate: string = 'The :attribute field must be a boolean.';

    public async test(): Promise<boolean> {
        return typeof this.getData() === 'boolean'
    }

}


export default BooleanRule;
