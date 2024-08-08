import Joi from "joi";

const TicketStatus = ['open', 'in_progress', 'resolved', 'closed']
const TicketAssignedTo = ['landlord', 'support']

class SupportSchema {
    static create() {
        return Joi.object({
            title: Joi.string().required(),
            description: Joi.string().required(),
            subject: Joi.string().required(),
            status: Joi.string().valid(...TicketStatus).default('open'),
            // attachment: Joi.array().items(Joi.string().uri().optional()).optional(),
            assignedTo: Joi.string().valid(...TicketAssignedTo).required(),
            cloudinaryUrls: Joi.array().items(Joi.string().uri()).optional(),

        });
    }

    static update() {
        return Joi.object({
            title: Joi.string().optional(),
            description: Joi.string(),
            subject: Joi.string(),
            status: Joi.string().valid(...TicketStatus),
            cloudinaryUrls: Joi.array().items(Joi.string().uri()).optional(),
            assignedTo: Joi.string().valid(...TicketAssignedTo),
        });
    }
}

export default SupportSchema;