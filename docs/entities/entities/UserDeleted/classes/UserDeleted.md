[**dls_frontend_write_rest_api v1.0.0**](../../../../README.md) • **Docs**

***

[dls_frontend_write_rest_api v1.0.0](../../../../modules.md) / [entities/entities/UserDeleted](../README.md) / UserDeleted

# Class: UserDeleted

Represents a soft-deleted user entity in the database.

## Remarks

This entity represents a soft-deleted user, containing information about the deletion event and a reference to the deleted user.

## Constructors

### new UserDeleted()

> **new UserDeleted**(): [`UserDeleted`](UserDeleted.md)

#### Returns

[`UserDeleted`](UserDeleted.md)

## Properties

### createdAt

> **createdAt**: `Date`

The date and time when the user was soft-deleted.

#### Source

[app/entities/entities/UserDeleted.ts:30](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/UserDeleted.ts#L30)

***

### user

> **user**: [`User`](../../User/classes/User.md)

The reference to the user that was soft-deleted.

#### Source

[app/entities/entities/UserDeleted.ts:38](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/UserDeleted.ts#L38)

***

### userId

> **userId**: `number`

The primary key of the UserDeleted entity, which is also the ID of the deleted user.

#### Source

[app/entities/entities/UserDeleted.ts:23](https://github.com/No-Life-inc/dls_write_api/blob/3b6ede554338fca33854ae593d3c96d63a70eb98/app/entities/entities/UserDeleted.ts#L23)
