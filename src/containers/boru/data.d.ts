/*
 * 定义rty_DialRecord pojo类
 */
export interface rtyDialRecord {
    vpnDialRecordId?: number;
    firstName: string;
    vpnDialCause: string;
    description: string;
    dialDate: string;
    createdDate?: string;
    lastUpdatedStamp?: string;
    createdStamp?: string;
    createdByUserLogin: string;
    telecomNumber: string;
    departmentId: number;
}

export interface rtyDialPerson {
    dialPersonId?: number;
    firstName: string;
    telecomNumber: string;
    description: string;
    firstChar?: string;
    departmentId: number;
    status: string;
    createdBy: string;
    modifiedBy?: string;
    billId: string;
    modifiedBillId?: string;
    opType: string;
    effectiveDate: string;
    lastUpdatedStamp?: string;
    createdStamp?: string;
}