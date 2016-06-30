# GroupTalk Admin API tutorial

## Preparations

The GroupTalk Admin REST API provides a programmatic interface to manage your
organization. To use the REST API, you first need to acquire an API key.
Contact [GroupTalk Support](mailto:support@grouptalk.com) to get one. Secondly,
you need to find out your organization's URL. This is easiest done by logging in
to your [GroupTalk Web Admin account](https://admin.grouptalk.com/admin/), click
the organization menu item (underneath your name in the menu to the left), and
look at what the URL in the address bar says. It should say something like
<https://admin.grouptalk.com/admin/#/organizations/42/>. That last number is the
GroupTalk identity number for your organization, and the API url for your
organization is <https://admin.grouptalk.com/api/organizations/42/> (with '42'
replaced with whatever your organization's identity number is).

## Trying things out

Now that you have an API key, and know your organization's identity number, you
can start exploring the API. Type in the following URL in your web browser:

    https://42:<api-key>@admin.grouptalk.com/api/authenticated-principal.json/

Alternatively, you can use a tool like `curl` to try out the API. We're using
`curl` below to illustrate the output of typical API requests. You might want to
use a JSON pretty printer to make the output a bit more human readable.

    $ curl -v -HAccept:application/json 'https://42:<api-key>@admin.grouptalk.com/api/authenticated-principal/'
    ...
    < HTTP/1.1 200 OK
    < Content-Type: application/json
    < Date: Tue, 28 Jun 2016 16:13:47 GMT
    < Content-Length: 171
    <
    { [171 bytes data]
    100   171  100   171    0     0   4267      0 --:--:-- --:--:-- --:--:--  4384
    * Connection #0 to host localhost left intact
    {
        "organizationName": "Example",
        "userUri": null,
        "currentRoles": [
            {
                "uri": "/api/roles/admin",
                "name": "admin"
            }
        ],
        "displayName": "Example",
        "organizationUri": "/api/organizations/42/"
    }

This URL returns information about the authenticated *principal*. Since an API
key isn't associated with a particular user, `userUri` is null, and `displayName`
contains the same as `organizationName`. More interestingly, there is an
`organizationUri` field, with a URL to your organization. This URL is relative
to the base URL, which is `https://42:<api-key>@admin.grouptalk.com>`. When
following links, always resolve them against this base URL.

Following the `organizationUri` link, we get the following result:

    $ curl -v -HAccept:application/json https://42:<api-key>@admin.grouptalk.com/api/organizations/42/
    ...
    < HTTP/1.1 200 OK
    < Link: </api/organizations/42/user-categories/>; rel="http://www.grouptalk.com/linktypes/user-categories"
    < Link: </api/organizations/42/default-user-categories/>; rel="http://www.grouptalk.com/linktypes/organization/default-user-categories"
    < Link: </api/organizations/42/default-ptt-group-categories/>; rel="http://www.grouptalk.com/linktypes/organization/default-ptt-group-categories"
    < Link: </api/organizations/42/users/>; rel="http://www.grouptalk.com/linktypes/users"
    < Link: </api/organizations/42/ptt-groups/>; rel="http://www.grouptalk.com/linktypes/ptt-groups"
    < Link: </api/organizations/42/call-groups/>; rel="http://www.grouptalk.com/linktypes/call-groups"
    < Link: </api/organizations/42/queues/>; rel="http://www.grouptalk.com/linktypes/queues"
    < Link: </api/organizations/42/custom-actions/>; rel="http://www.grouptalk.com/linktypes/custom-actions"
    < Link: </api/organizations/42/custom-action-groups/>; rel="http://www.grouptalk.com/linktypes/custom-action-groups"
    < Link: </api/organizations/42/alarm-definitions/>; rel="http://www.grouptalk.com/linktypes/alarm-definitions"
    < Link: </api/organizations/42/links/>; rel="http://www.grouptalk.com/linktypes/links"
    < Link: </api/organizations/42/priceplan/>; rel="http://www.grouptalk.com/linktypes/priceplan"
    < Link: </api/organizations/42/licenses/>; rel="http://www.grouptalk.com/linktypes/organization/licenses"
    < Link: </api/organizations/42/invoices/>; rel="http://www.grouptalk.com/linktypes/organization/invoices"
    < Link: </api/organizations/42/become-customer>; rel="http://www.grouptalk.com/linktypes/organization/become-customer"
    < Link: </api/organizations/42/end-of-trial>; rel="http://www.grouptalk.com/linktypes/organization/endoftrial"
    < Link: </api/organizations/42/payment-methods>; rel="http://www.grouptalk.com/linktypes/organization/payment-methods"
    < Link: </api/organizations/42/activate>; rel="http://www.grouptalk.com/linktypes/organization/activate"
    < Link: </api/organizations/42/api-key/>; rel="http://www.grouptalk.com/linktypes/organization/api-key"
    < Content-Type: application/json
    < Date: Tue, 28 Jun 2016 12:20:04 GMT
    < Content-Length: 1127
    <
    { [1127 bytes data]
    100  1127  100  1127    0     0   8087      0 --:--:-- --:--:-- --:--:--  8107
    * Connection #0 to host localhost left intact
    {
        "email": "contact@email.org",
        "phone": null,
        "passwordValidDuration": null,
        "autoMuteWarningSeconds": 4,
        "originatingNumber": "+46XXXXXXXX",
        "inTrial": false,
        "prohibitPasswordReuse": false,
        "created": "2013-02-15T13:03:08.000+0000",
        "uri": "/api/organizations/42/",
        "hasPaymentInfo": false,
        "expirationWarningInterval": null,
        "validUntil": null,
        "numExpirationWarnings": 0,
        "name": "A company",
        "currency": "SEK",
        "id": 42,
        "autoMuteSeconds": 12,
        "resellerUri": "/api/organizations/resellers/1/",
        "pendingCustomer": false,
        "defaultSyncGroup": null,
        "label": {
            "conferenceLabel4": "",
            "enableConferenceLabel5": false,
            "enableUserLabel1": false,
            "enableConferenceLabel3": false,
            "conferenceLabel2": "",
            "enableConferenceLabel4": false,
            "conferenceLabel5": "",
            "conferenceLabel3": "",
            "enableConferenceLabel2": false,
            "conferencePattern": "%n",
            "enableUserLabel2": false,
            "userLabel3": "",
            "userLabel5": "",
            "enableUserLabel4": false,
            "userLabel2": "",
            "id": 20,
            "enableUserLabel3": false,
            "enableConferenceLabel1": false,
            "enableUserLabel5": false,
            "userLabel4": "",
            "userLabel1": "",
            "userPattern": "%f %l",
            "conferenceLabel1": "",
            "userTitlePattern": "",
            "interfacePoolPattern": "Radio %n"
        },
        "orgNumber": "550000-0000"
    }

As you can see, this returns quite a bit of data. The first part is the response
headers, and notably, a bunch of `Link` headers are returned. These links refer
to URLs within your organization that might be interesting, such as where to
find your users, your user categories, etc. Each link has a type, identified by
the `rel` attribute, and that value is an URI. The `rel` URI is not meant to be
followed, it is just an URI identifying what type of information to expect from
the `Link` URL.

Next comes the actual JSON data returned by this request.

### Collection resources

The URL `/organizations/42/` refers to an _instance_. Other URLs refer to
_collection_ resources. Here's an example of the response from a `GET` on a
collection resource:

    $ curl -v -HAccept:application/json 'https://42:<apikey>@admin.grouptalk.com/api/organizations/42/users/'
    ...
    < HTTP/1.1 200 OK
    < Server: GlassFish Server Open Source Edition  4.1.1
    < X-Powered-By: Servlet/3.1 JSP/2.3 (GlassFish Server Open Source Edition  4.1.1  Java/Oracle Corporation/1.8)
    < X-Collection-Limit: 25
    < X-Collection-Offset: 0
    < X-Collection-Total: 8
    < Link: <http://localhost:8080/api/organizations/42/users/?offset=0&limit=25>; rel="self"
    < Link: <http://localhost:8080/api/organizations/42/users/?offset=0&limit=25>; rel="first"
    < Link: <http://localhost:8080/api/organizations/42/users/?offset=0&limit=25>; rel="last"
    < Content-Type: application/json
    < Date: Tue, 28 Jun 2016 13:05:27 GMT
    < Content-Length: 3524
    <
    { [3524 bytes data]
    100  3524  100  3524    0     0  21101      0 --:--:-- --:--:-- --:--:-- 21228
    * Connection #0 to host localhost left intact
    [
        {
            "email": "user1@email.org",
            "passwordExpires": null,
            "initialMute": null,
            "hasPassword": true,
            "lastName": "Doe",
            "disabled": false,
            "created": "2013-02-15T13:03:08.000+0000",
            "uri": "/api/organizations/users/15439/",
            "userLabel3": "",
            "userLabel5": "",
            "firstName": "John",
            "userLabel2": "",
            "organizationUri": "/api/organizations/42/",
            "id": 15439,
            "deleted": null,
            "userLabel4": "",
            "nextPasswordExpiresReminder": null,
            "userLabel1": "",
            "loginId": "john.doe"
        },
        ...
    ]

**`GET`** on a collection resource returns, as you might imagine, a collection of
resources. They return a subset of the available resources, controlled by the
query parameters `limit` (default 25) and `offset` (default 0). The response
contains the headers `X-Collection-Limit`, `X-Collection-Offset` and
`X-Collection-Total`, which tells you what part of the total collection you're
getting, and how big it is. Note that `X-Collection-Limit` may refer past the
available resources, as in the example below. It simply reflects the value of
the `limit` parameter passed in (or the default value, as here).

The `Link` headers link to other _pages_ within the collection. Again, the `rel`
attribute identifies the type of the link. Possible `rel` values here are `self`
(the URL for this subcollection), `first` (the first _page_ of the collection),
`last`, `next` and `previous`.

All collection resources have a `fields` subresource, which returns a JSON
object with a single member `fields`, an array of all valid fields for that
resource type. Some of these fields are default fields, while others have to be
explicitly requested in order to be returned.

Resources are typically hierarchically organized. At the root there are
organizations, and underneath there are resources like users, PTT groups, user
categories, queues, panic alarms, etc. When requesting a collection, or an
instance of a subresource, you can optionally request for parent fields, as
indicated by the list returned from `GET`-ing the `fields` subresource:

    $ curl -v -HAccept:application/json 'https://42:<apikey>@admin.grouptalk.com/api/organizations/42/users/fields/'
    ...
    < HTTP/1.1 200 OK
    < Server: GlassFish Server Open Source Edition  4.1.1
    < X-Powered-By: Servlet/3.1 JSP/2.3 (GlassFish Server Open Source Edition  4.1.1  Java/Oracle Corporation/1.8)
    < Content-Type: application/json
    < Date: Tue, 28 Jun 2016 14:15:02 GMT
    < Content-Length: 904
    <
    { [904 bytes data]
    100   904  100   904    0     0  11967      0 --:--:-- --:--:-- --:--:-- 12053
    * Connection #0 to host localhost left intact
    {
    "fields": [
        "lastName",
        "loginId",
        "organizations!inTrial",
        "userLabel1",
        "userLabel2",
        "organizations!hasPaymentInfo",
        "userLabel3",
        "userLabel4",
        "hasPassword",
        "userLabel5",
        "organizations!passwordValidDuration",
        "organizations!orgNumber",
        "organizations!resellerUri",
        "organizations!id",
        "disabled",
        "organizations!email",
        "id",
        "organizations!prohibitPasswordReuse",
        "organizations!defaultSyncGroup",
        "email",
        "organizations!originatingNumber",
        "organizations!validUntil",
        "created",
        "--ignore--",
        "nextPasswordExpiresReminder",
        "organizations!autoMuteSeconds",
        "organizationUri",
        "organizations!autoMuteWarningSeconds",
        "uri",
        "organizations!created",
        "organizations!label",
        "passwordExpires",
        "firstName",
        "organizations!name",
        "deleted",
        "organizations!phone",
        "organizations!uri",
        "organizations!numExpirationWarnings",
        "organizations!pendingCustomer",
        "organizations!expirationWarningInterval",
        "initialMute",
        "organizations!currency"
    ]
    }

Above are all the valid fields for the user resource. Fields prefixed with
`organizations!` are fields belonging to the user's organization, and none of
those are returned by default. To specify what fields to include in the response,
use the `field` [matrix parameter](#matrix-parameters)

    $ curl -v -HAccept:application/json 'https://42:<apikey>@admin.grouptalk.com/api/organizations/42/users;field=uri;field=firstName;field=lastName;field=organizations!name/'
    ...
    < HTTP/1.1 200 OK
    < Server: GlassFish Server Open Source Edition  4.1.1
    < X-Powered-By: Servlet/3.1 JSP/2.3 (GlassFish Server Open Source Edition  4.1.1  Java/Oracle Corporation/1.8)
    < X-Collection-Limit: 25
    < X-Collection-Offset: 0
    < X-Collection-Total: 8
    < Link: <http://localhost:8080/api/organizations/20/users;field=firstName;field=lastName;field=organizations!name/?offset=0&limit=25>; rel="self"
    < Link: <http://localhost:8080/api/organizations/20/users;field=firstName;field=lastName;field=organizations!name/?offset=0&limit=25>; rel="first"
    < Link: <http://localhost:8080/api/organizations/20/users;field=firstName;field=lastName;field=organizations!name/?offset=0&limit=25>; rel="last"
    < Content-Type: application/json
    < Date: Thu, 30 Jun 2016 09:04:29 GMT
    < Content-Length: 611
    <
    { [611 bytes data]
    100   611  100   611    0     0   2193      0 --:--:-- --:--:-- --:--:--  2189
    * Connection #0 to host localhost left intact
    [
        {
            "lastName": "Doe",
            "uri": "/api/organizations/users/15439/",
            "firstName": "John",
            "organizations!name": "A company"
        },
        ...
    ]

### Relation resources

Relation resources are a special kind of collection resources, and represents a
relation between a resource and a set of other resources. An example is the
roles associated with a user category.

**NOTE**: `access-groups` in the URL below will be replaced with `user-categories`
in the next release of the GroupTalk admin API!

    $ curl -v -HAccept:application/json 'http://42:<apikey>@admin.grouptalk.com/api/organizations/access-groups/22/roles/' | aeson-pretty
    ...
    < HTTP/1.1 200 OK
    < X-Collection-Limit: 25
    < X-Collection-Offset: 0
    < X-Collection-Total: 1
    < Link: <http://localhost:8080/api/organizations/access-groups/22/roles/?offset=0&limit=25>; rel="self"
    < Link: <http://localhost:8080/api/organizations/access-groups/22/roles/?offset=0&limit=25>; rel="first"
    < Link: <http://localhost:8080/api/organizations/access-groups/22/roles/?offset=0&limit=25>; rel="last"
    < Content-Type: application/json
    < Date: Thu, 30 Jun 2016 09:17:26 GMT
    < Content-Length: 173
    <
    { [173 bytes data]
    100   173  100   173    0     0   1891      0 --:--:-- --:--:-- --:--:--  1901
    * Connection #0 to host localhost left intact
    [
        {
            "uri": "/api/organizations/access-groups/22/roles/privatecall",
            "childUri": "/api/roles/privatecall",
            "name": "privatecall",
            "parentUri": "/api/organizations/access-groups/22/"
        },
        {
            "uri": "/api/organizations/access-groups/22/roles/reader",
            "childUri": "/api/roles/reader",
            "name": "reader",
            "parentUri": "/api/organizations/access-groups/22/"
        },
        ...
    ]

The role relation has it's own URL: `/api/organizations/access-groups/22/roles/reader`.
The returned data refers to the user category it belongs to in the `parentUri`
field, and what role it represents through the `childUri` field.

To add a new role to the user category, we `POST`

 To remove this
role you send a `DELETE` to the relation URL:

    $ curl -v -XDELETE 'http://42:<apikey>@admin.grouptalk.com/api/organizations/access-groups/22/roles/reader'

### Supported instance resource methods

All instance resources, regardless of type, has an `uri` field, through which you can
interact with the resource. It may support the following HTTP methods (consult
the API reference for details):

`GET`
:   Get a representation of the resource.

`PUT`
:   Replace the representation with the data sent in the request body.

`PATCH`
:   Replace individual fields on the resource, e.g. the name.

`DELETE`
:   Remove this resource.

### Supported collection resource methods

Collection resources may support the following HTTP methods:

`GET`
:   Get a representation of the resource.

`POST`
:   Create a new instance resource in this collection

`PUT`
:   Replace the collection with the given list of resources

## Matrix parameters

Matrix parameters are parameters that may be applied to a path segment in the
URL, as opposed to query parameters, which applies to the whole URL. They are
typically used to filter/influence the result of a `GET` request. Some examples:

`/organizations;like-name=Foo%25/users/`
:   Get all users from organizations where the name field begins with `'Foo'`

### Common matrix parameters for Collections

The following matrix parameters can be used on any collection resource URL:

`;like-<fieldlist>=<expr>`
:   Only return resources where any of the fields matches `expr`. `expr` may
    contain the following wildcards:

    * `_` - Matches any character
    * `%` - Matches 0 to many characters

    Only works for string fields.

`;where-<fieldlist>=<literal>`
:   Only return resources where any of the fields has the value `literal`.

    Works on any type of field.

`;from-<fieldlist>=<literal>`
:   Only return resources where any of the fields has a value greater than or
    equal to `literal`

    Only works on numerical and date fields.

`;to-<fieldlist>=<literal>`
:   Only return resources where any of the fields has a value less than or
    equal to `literal`

    Only works on numerical and date fields.

`;order-by=<field><(order)?>`
:   Order the result by `field`. `order` is optional, and is either `ASC`
    (default) or `DESC`. Use multiple `order-by` parameters to sort on multiple
    fields.

`fieldlist` in the parameter names above is a comma separated list of fields.
Using a list of field names here means resources where *any* of the fields match
will be returned. On the other hand, if multiple parameters are used, they must
all match for the resource to be returned.

`organizations/users;like-firstName,lastName=%john%`
:   Users where either firstName *or* lastName contains `john` are returned.

`organizations/users;like-firstName=%john%;like-lastName=%doe%`
:   Users where firstName contains `john` *and* lastName contains `doe` are
    returned.

More complex filters, like "return all users where firstName is `John` *or*
lastName is `Doe`" can not be expressed, unfortunately.
