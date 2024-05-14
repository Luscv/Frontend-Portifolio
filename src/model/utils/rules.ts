// import i18n from 'src/i18n';

export abstract class Rules {

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    protected constructor() {
    }
    // i18n.global.t('message.required_field');
    public required_field(field?: string | number): boolean | string {
        return (!!field && String(field).length > 0) || 'message.required_field'
    }

    public required_date_field(field?: string | number): boolean | string {
        return (!!field && !isNaN(new Date(field).getDate())) || 'message.required_field'
    }

    public required_obj_field<T>(v?: T): boolean | string {
        return !!v || 'message.required_field'
    }

    public email_is_valid(email: string): boolean | string {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || 'message.invalid_email'
    }
}
