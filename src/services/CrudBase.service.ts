import { HttpException, HttpStatus } from "@nestjs/common";
import { BaseEntity, DeepPartial, FindOptionsWhere, Repository } from "typeorm";

export abstract class CrudBaseService<T extends BaseEntity> {

    constructor(public readonly repository: Repository<T>) {}

    public async getResource(where: FindOptionsWhere<T>) {
        return this.repository.findOne({where})
    }

    public createResource(data: DeepPartial<T>) {
        return this.repository.save(this.repository.create(data));
    }

    public async updateResource(where: FindOptionsWhere<T>, data: DeepPartial<T>) {
        const find = await this.repository.findOne({where});

        if (find) {            
            Object.assign(find, data);
            return find.save();
        }
        else {
            throw new HttpException('not found!', HttpStatus.NOT_FOUND);
        }
    }

    public async deleteResource(where: FindOptionsWhere<T>) {
        const find = await this.getResource(where);
        if (find) {
            return find.remove();
        }
        else {
            throw new HttpException('not found!', HttpStatus.NOT_FOUND);
        }
    }

    public async paginateResource(where: FindOptionsWhere<T>, page: number, take: number) {
        const skip = (page - 1) * take;

        const [resources, total] = await this.repository.findAndCount({
          where,
          take,
          skip,
        });
    
        const totalPages = Math.ceil(total / take);
    
        return {
          data: resources,
          page,
          totalPages,
          totalItems: total,
        };
    }

    public listResource(where: FindOptionsWhere<T>) {
        return this.repository.find({where}); 
    }
}