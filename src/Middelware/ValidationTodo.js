const { z } = require('zod');

const todoZodSchema = z.object({
    title: z.string({
        required_error: "حقل الـ title مطلوب ومقدرش أستغنى عنه",
        invalid_type_error: "الـ title لازم يكون نص (String)"
    })
    .min(3, "العنوان قصير أوي، خليه 3 حروف على الأقل")
    .max(50, "العنوان طويل زيادة عن اللزوم، 50 حرف كفاية"),

    description: z.string({
        invalid_type_error: "الـ description لازم يكون نص (String)"
    }).max(500, "الوصف طويل جداً").optional(),

    completed: z.boolean({
        invalid_type_error: "حقل completed لازم يكون True أو False"
    }).optional()
});


const validateTodo = (req, res, next) => {

    const result = todoZodSchema
        .strict()
        .safeParse(req.body);

    if (!result.success) {

        return res.status(400).json({
            success: false,
            message: "Validation Error",
            errors: result.error.issues.map(err => ({
                field: err.path[0],
                message: err.message
            }))
        });
    }

    req.validatedData = result.data;

    next();
};

module.exports = validateTodo;