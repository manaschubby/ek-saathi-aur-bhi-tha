export interface OfficerCardProps {
    image?: string,
    name: string,
    rank?:string,
    yearOfDeath?:string,
    unit?:string,
    svc_no?:string,
    svc?:string,
    operation?:string,
    reasonOfDeath?:string,
    awards?:string,
    arm?:string
}
export interface OfficersProps {
    officers: Array<OfficerCardProps>
}