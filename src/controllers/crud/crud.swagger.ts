import { OperationObject } from "@nestjs/swagger/dist/interfaces/open-api-spec.interface";
import {ApiQueryOptions} from '@nestjs/swagger/dist/decorators/api-query.decorator';

export interface CrudSwagger {
    createOperation:  Partial<OperationObject>,
    updateOperation:  {
        operation: Partial<OperationObject>,
        where: ApiQueryOptions
    },
    deleteOperation: {
        operation:  Partial<OperationObject>,
        where: ApiQueryOptions
    },
    listOperation: {
        operation:  Partial<OperationObject>,
        where: ApiQueryOptions
    },
    paginateOperation:  {
        operation: Partial<OperationObject>,
        where: ApiQueryOptions

    },
    getOperation: {
        operation:  Partial<OperationObject>,
        where: ApiQueryOptions
    }
};