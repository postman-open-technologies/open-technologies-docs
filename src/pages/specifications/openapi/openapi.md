---
title: "OpenAPI"
order: 2
page_id: "openAPI"
warning: false
updated: 2023-03-07
---

OpenAPI is an open-source specification for describing the surface area of HTTP APIs, providing a machine-readable format for describing the details of the request and responses, and establishing a contract that can be used to generate documentation, mock servers, testing, security, code generation, and other essential elements of operating APIs across organizations.

## Purpose

OpenAPI provides a machine and human-readable contract regarding the business value each API delivers. Establishing an artifact that can be used to generate mock servers, documentation, tests, and other elements of the API lifecycle. Providing guardrails for API operations that provide us with a common vocabulary for collectively moving APIs forward at scale in a consistent way, giving us something that the machines and humans can make sense of. Acknowledging that it takes something to be well defined enough for the computers to get what is happening, but also easy enough for humans to make sense of, allows us to strike a balance and agreement between the machines and humans about what each digital resource and capability will do.

* **Contracts** - OpenAPIs provide a machine-readable contract that can provide a shared meaning of what an API delivers, helping ensure that API producers and consumers are on the same page.

* **Lifecycle** - OpenAPIs can be used across the API lifecycle, most commonly used for documentation and code generation, but can also be used to automate testing, security, and other aspects of API operations.

* **Communication** - OpenAPI helps ensure API producers and consumers are on the same page and have a shared understanding regarding what an API should be doing, as well as what it should not be doing, providing a machine-readable reference for everyone to agree.

* **Change** - Machine-readable contracts are how you get a better handle on the change occurring across many APIs, leaving on semantic or date-based versioning using.

OpenAPI or other specifications enable you to have a record and communicate what change is happening. OpenAPI is often seen as just documentation because of its Swagger roots, but it possesses a much more important purpose than just powering documentation, and until API producers put it to work they will often miss the bigger picture and value it delivers.

## History

The OpenAPI specification was born as "Swagger", only shedding the name when it evolved from version 2.0 to 3.0 and was introduced into the Linux Foundation as part of the OpenAPI Initiative (OAI). This journey is unknown to some who still refer to the specification as Swagger, which is now just the name of the commercial tooling suite owned by SmartBear. The formal specification was renamed OpenAPI with the release of 3.0 as the specification was put on a formal governance base, setting the stage for the evolution of the specification over the last seven years.

While there are a number of new features available in versions 3.0 and 3.1 of the specification, there are still a number of companies still using 2.0 and working to make the switch to the latest version of the specification. Most new services, tooling, and implementations are using OpenAPI 3.x, but enterprise organizations who began using the format between 2010 and 2016 are oftentimes reluctant to invest in the migration, despite the benefits. OpenAPI 2.0 still possesses a significant mindshare of developers, but increasingly as teams understand the benefits version 3.1 of the API specification bring, they are beginning to migrate and adopt the latest version.

## Objects

The OpenAPI specification, gives you the ability to describe the surface area of your HTTP APIs using JSON or YAML. OpenAPI provides a robust way to describe what is possible with each API, defining the surface area of each request and response.

* **Info (https://spec.openapis.org/oas/latest.html#info-object)** - You have a place to define common metadata for an API, such as a name, description, licensing, terms of service, and contact information, helping to ensure that all APIs have enough metadata available to articulate a purpose across the API life cycle.
* **Servers (https://spec.openapis.org/oas/latest.html#server-object)** - You may include a list of servers for every instance of API, possibly across multiple regions or stages of development. That allows consumers to quickly find an instance of an API they can use to meet their needs and apply it as a resource.
* **Paths (https://spec.openapis.org/oas/latest.html#paths-object)** - API consumers can take different paths to access resources and capabilities, similar to browsing the web. But in this case, they are navigating the API landscape, looking for the resources and capabilities needed to power applications and integrations.
* **Operations (https://spec.openapis.org/oas/latest.html#operation-object)** - Define the specific operations that can be accomplished using a given path. Operations provide the ability to read, write, update, delete, and perform other actions on API resources, setting different capabilities defined as part of each API in motion.
* **Parameters (https://spec.openapis.org/oas/latest.html#parameter-object)** - Provide a defined set of parameters that can be used to change the state of API responses. Provide key/value pairs for common things like pagination or search, but be specific, depending on the objects returned with API responses.
* **Responses (https://spec.openapis.org/oas/latest.html#response-object)** - Describe the HTTP Status Codes, headers, and media types returned with each response, helping the consumer understand the structure and state of the response and providing consumers with as much information as possible about responses.
* **Schema (https://spec.openapis.org/oas/latest.html#schema-object)** - Provide JSON Schema descriptions of request and response bodies, allowing the responses to be validated and helping automate validation at the gateway to ensure the highest quality possible for consuming APIs within any application.
* **Security (https://spec.openapis.org/oas/latest.html#security-scheme-object)** - Describe the type of authentication required for accessing an API and provides a machine-readable description of the API keys required. OAuth, JWT, and other types of security protocols help automate the authentication layer of API usage within clients.

OpenAPI isn’t just for documentation or code generation. It is the standard business contract you apply to every digital resource you use in applications and integrations across the enterprise. It provides teams with a common vocabulary to describe the relationship between API producers and consumers.

## Lifecycle

OpenAPI is best known for being able to generate API documentation, but it is also capable of generating mock servers, tests, security scans, client SDKs, server stubs, and other essential aspects of operating APIs. OpenAPI is much more than just any single end goal of producing a definition for an API, providing the machine-readable details needed to guide an API forward as part of the API lifecycle. The usage of OpenAPI often depends on how far along an organization and its teams are in their API journey, and usually, it begins in service of documentation, but then will rapidly expand from there to service other areas of the API lifecycle across organizations.

* **Documentation** - OpenAPI can be used to generate and keep documentation up to date, providing all the details needed to publish human-readable documentation that makes onboarding much easier.
* **Client Code Generation** - OpenAPI can be used to generate code libraries and SDKs in a variety of programming languages, helping produce client or server-side code that makes it easier to work with APIs.
* **Contract Testing** - OpenAPI can be used to generate contract tests, ensuring that every path of an API is fully tested, putting the contract into contract testing, and making sure all contracts are valid.
* **Mocking** - With the surface area of an API defined as a machine-readable OpenAPI, complete with examples for each individual request and response it can then be used to generate mock servers that can be used as part of the API design process, for testing, or supporting specific business use cases.
* **Gateway** - Most modern API gateways support the OpenAPI specification, using the contract to deploy and map incoming API requests to their appropriate backend system, integration, or API, ensuring that production and the API contract are always in sync, and properly describing the surface area of each API.

There are many other areas of the API lifecycle that OpenAPI can be used to help improve API operations, but these elements represent the top ways in which the open source specification is being applied across enterprise organizations. OpenAPI will standardize how you document, generate code, test, mock, and deploy APIs to gateways across teams and domains.

## Collaboration

OpenAPI contracts provide a rich opportunity for collaboration across teams, with stakeholders, and consumers, allowing for sharing, publishing, commenting, and other valuable ways for working together, helping make API operations a team sport.

* **Sharing** - OpenAPIs provide teams with a tangible machine-readable way to share a definition for an API using a URL, allowing anyone with access to share links in chats, social media, and other existing communication channels.
* **Publishing** - It is always recommended that you publish the OpenAPI alongside the documentation you publish for any API, providing both the machine and human-readable definition for an API, allowing consumers to pick what they need.
* **Source Control** - OpenAPI artifacts can be synced to source control, ensuring that the contract for each API is present alongside the code, tests, and other artifacts needed to bring an API to life and maintain it as part of each release.
* **Comments** - An OpenAPI opens up the opportunity to associate comments and discussion with the overall contract, but more importantly specific elements of that contract, helping make discussions as precise as they possibly can across teams and with consumers.

It is hard to get teams on the same page when it comes to what an API should do. OpenAPI provides a sharable, publishable, and repeatable format that can be used to drive discussions, collaboration, and developer across API operations. Getting your team on the same page and moving in the same direction is the top benefit enterprises are seeing from using OpenAPI.

## Governance

OpenAPI is essential to any enterprise API governance strategy. If you do not have the surface area of your APIs consistently defined in a common machine-readable format you will not be able to maintain consistency across teams and domains. There will be many ways in which OpenAPI contracts will need to be subject to governance that is unique to each organization, but there is a handful that every business should start with.

* **Information** - Providing a standard set of Spectral rules that help ensure that each API contract has the required information, helping govern the name, description, licensing, contact information, and other essential information needed across teams and by consumers. Spectral is an Open Source API style guide enforcer and linter.
* **Operations** - Having very broad, as well as fine-grained Spectral rules that can be applied to API paths, operations, requests, and responses help ensure that the parameters, headers, status codes, media types, and other building blocks of our APIs are as consistent as possible, governing all APIs across teams.
* **Schema** - OpenAPI contracts allow you to apply Spectral rules to the schemas used as part of API requests and responses, using JSON Schema to help make sure the objects we are using across operations are as common and standardized as possible.
* **Security** - Spectral rules can be applied to the security definitions within an OpenAPI for any API, as well as some of the patterns involved in OWASP's Top 10 API security vulnerabilities--helping strengthen the security aspect of governance.

Governance is a journey and is not something that is solved overnight with a handful of Spectral rules applied to OpenAPI definitions. This is just where you should begin when it comes to governance, acknowledging that complete up-to-date OpenAPI definitions for all APIs will be essential to your overall API journey and strategy.

## Foundation

The OpenAPI specification is built on a solid open-source foundation, ensuring that the format for describing our APIs is independent of any platform, service, or tooling. OpenAPI has been evolving since it was put into the Linux Foundation in 2015 and enjoys a solid base for growth due to a handful of key ingredients being present.

* **OpenAPI Initiative** - The OpenAPI specification is managed by the OpenAPI Initiative (OAI), providing a Business Governance Board (BGB), Technical Steering Committee, outreach and event resources, as well as Special Interest Groups (SIGs) to move forward specific areas of the specification and resources for vertical markets.
* **Linux Foundation** - The OpenAPI Initiative (OAI) operates within the larger Linux Foundation (LF), providing a wealth of resources and guidance for the specification, ensuring it lives on and has the support it needs to operate on into the future.
* **Service Providers** - The OpenAPI specification is supported by most commercial API service providers, bringing more interoperability muscle to the specification, and allowing it to be imported, exported, and synced between providers using source control.
* **Tooling** - In addition to commercial service providers, open source tooling makers have also adopted and built their solutions around the OpenAPI specification, providing many low-cost options when it comes to leveraging OpenAPI contracts across the API lifecycle.
* **Adoption** - When you look across the landscape you will see that many top API providers have adopted the OpenAPI specification, with companies like Twilio, Stripe, Twitter, Plaid, GitHub, and others using the format for documentation and code generation as part of their regular operations.

There are many factors at play that have pushed OpenAPI to be the specification of choice when it comes to enterprise organizations putting to work, but these elements provide a base foundation that has brought us to this moment and will continue expanding in coming years. OpenAPI is currently at version 3.1, with active discussion started regarding what version 4.0 might look like, continuing to build on the foundation that has already been laid.

## Learn more

To learn more about the API Specification you can head over to [the learning center](https://learning.postman.com/docs/integrations/available-integrations/working-with-openAPI/) and understand how it is used as part of the Postman platform, or visit some of the follow links for the OpenAPI Initiative.

* [Website](https://www.openapis.org/)
* [Specification](https://spec.openapis.org/oas/latest.html)
* [Getting Started Documentation](https://oai.github.io/Documentation)
* [Blog](https://openapis.org/news-faq/blog)
* [Twitter](https://twitter.com/openapispec)
* [LinkedIn Group](https://www.linkedin.com/groups/8556951)

## Contribute

To contribute to the ongoing OpenAPI work, understand what is happening with the specification, and get up to speed on where it is headed from a technical perspective, here are some links to get you started.

* [GitHub Organization](https://github.com/OAI)
* [Specification](https://github.com/OAI/OpenAPI-Specification)
* [OpenAPI v4 Proposals](https://github.com/OAI/Moonwalk)
* [Github Issues](https://github.com/OAI/OpenAPI-Specification/issues)
* [TDC Weekly Calls](https://github.com/OAI/OpenAPI-Specification/labels/Housekeeping)
* [Discussions](https://github.com/OAI/OpenAPI-Specification/discussions)
