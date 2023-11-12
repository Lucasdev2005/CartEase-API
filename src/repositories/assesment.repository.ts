import { Assessment } from "@prisma/client";
import { baseRepository } from "./base.repository";

export default class AssesmentRepository extends baseRepository<Assessment> {
    constructor() {super('Assessment')}

    public createItem(data): Promise<Assessment> {
        if (data.ASS_Rating  <= 5 && data.ASS_Rating > 0) {
            return super.createItem(data);
        }
    }
}