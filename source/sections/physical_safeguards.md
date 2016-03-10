#Physical Safeguards (see <a href="http://www.hhs.gov/ocr/privacy/hipaa/administrative/securityrule/physsafeguards.pdf">164.310</a>)

This one is pretty straight forward - *physical measures, policies, and procedures to protect a covered entityâ€™s electronic information systems and related buildings and equipment, from natural and environmental hazards, and unauthorized intrusion.* Data center security is typically easier to address than office security, though at Catalyze we address both.


##Facility Access Controls - 164.310(a)(1)

Standard | Description
--------- | -----------
Contingency Operations (A) | Establish (and implement as needed) procedures that allow facility access in support of restoration of lost data under the disaster recovery plan and emergency mode operations plan in the event of an emergency.
Facility Security Plan (A) | Implement policies and procedures to safeguard the facility and the equipment therein from unauthorized physical access, tampering, and theft.
Access Control and Validation Procedures (A) | Implement procedures to control and validate a person's access to facilities based on their role or function, including visitor control, and control of access to software programs for testing and revision.
Maintenance Records (A) | Implement policies and procedures to document repairs and modifications to the physical components of a facility which are related to security (for example, hardware, walls, doors, and locks).

Catalyze, Inc. infrastructure supporting its environments is hosted at Rackspace, AWS (Amazon Web Services) and Azure, which provides hosting and recovery services for the infrastructure.

Catalyze headquarters also has any written policies and procedures for safeguarding the corporate location, which includes workstations with access to the environment, from unauthorized physical access. Smart locks are used to track access and all visitors are logged and escorted.

The Catalyze environment is entirely hosted and built on hardware components provided by Rackspace, AWS and Azure which Catalyze would never have access into.


##Workstation Use - 164.310(b)

Standard | Description
--------- | -----------
Workstation Use (Req) | Implement policies and procedures that specify the proper functions to be performed, the manner in which those functions are to be performed, and the physical attributes of the surroundings of a specific workstation or class of workstation that can access ePHI.

Catalyze, Inc. has policies in place that define the acceptable uses in place for workstations within the environment. These policies define the acceptable and unauthorized uses of personnel that provided workstations with access to systems potentially interacting with ePHI. These policies are enforced on all workstations. All internal email uses HIPAA-compliant vendors.


##Workstation Security - 164.310c

Standard | Description
--------- | -----------
Workstation Security (Req) | Implement physical safeguards for all workstations that access ePHI, to restrict access to authorized users.

Catalyze has a formal Workstation and Portable Media Security Policy that identifies the specific requirements of each device. The policies define the requirements for using and/or restricted specific actions while engaged with any ePHI. Additionally, workstations are secured appropriately to limit exposure to breaches. Firewalls and hard disk encryption are used on all workstations. Actions and events are monitored and controlled, with user restrictions on downloading or copying any ePHI without documented approval and business justification. Additionally, all file storage internally at Catalyze utilizes HIPAA-compliant cloud-based vendors (currently Box and Google Apps).


##Device and Media Controls - 164.310(d)(1)

Standard | Description
--------- | -----------
Disposal (Req) | Implement policies and procedures to address the final disposition of ePHI, and/or the hardware or electronic media on which it is stored.
Media Re-use (Req) | Implement procedures for removal of ePHI from electronic media before the media are made available for re-use.
Accountability (A) | Maintain a record of the movements of hardware and electronic media and any person responsible therefore.
Data Backup and Storage (A) | Create a retrievable, exact copy of electronic protected health information, when needed, before movement of equipment.

Catalyze has policies and procedures for all workstations that interact with and may potentially become exposed to ePHI. These policies have requirements for secure media disposal so that ePHI cannot be recovered from these systems.

Catalyze has Media re-use requirements for the workstations, despite the fact that these workstations do not have access to and interaction with ePHI.


##Technical Safeguards (see <a href="http://www.hhs.gov/ocr/privacy/hipaa/administrative/securityrule/techsafeguards.pdf">164.312</a>)

This section of HIPAA outlines *the technology and the policy and procedures for its use that protect electronic protected health information and control access to it.* It is important to note that these requirements are not prescriptive, and there is flexibility in implementation. The key is that measures that are reasonable and appropriate are implemented to safeguard ePHI.


##Access Control - 164.312(a)(1)

Standard | Description
--------- | -----------
Unique User Identification (Req) | Assign a unique name and/or number for identifying and tracking user identity.
Emergency Access Procedure (Req) | Establish (and implement as needed) procedures for obtaining necessary electronic protected health information during an emergency.
Automatic Logoff (A) | Implement electronic procedures that terminate an electronic session after a predetermined time of inactivity.
Encryption and Decryption (A) | Implement a method to encrypt and decrypt electronic protected health information.

All users within the Catalyze environment are issued a unique user name and password. All accounts are local and unique. General/shared accounts are not in place and root access is restricted and monitored.

Catalyze has procedures and a process for obtaining access to ePHI should an emergency or disaster occur.

Catalyze systems settings on all of its servers have session timeout features enabled and configured to terminate sessions after a period of 30 minutes or less.

Catalyze encrypts all stored data in its environment using 256-bit AES encryption. Additionally, all data in transit is encrypted end to end (more below).


##Audit Controls - 164.312(b)

Standard | Description
--------- | -----------
Audit Controls (Req) | Implement hardware, software, and/or procedural mechanisms that record and examine activity in information systems that contain or use ePHI.

Catalyze, Inc. has policies in place addressing audit trail requirements. Systems within the its environment are logging to a centralized logging solution, Logstash, which is monitoring system level events and contains user id, timestamp, event, origination, and type of event. These logs are constantly monitored for suspicious events and alerts are generated to any type of behavior that is suspicious.


##Integrity - 164.312c(1)

Standard | Description
--------- | -----------
Mechanism to Authenticate Electronic Protected (A) | Implement electronic mechanisms to corroborate that electronic protected health information has not been altered or destroyed in an unauthorized manner.

Catalyze has employed a centralized access control system for authenticating and accessing internal systems where ePHI resides. Currently, Catalyze employees access a bastion host using an SSH-2 connection to access internal systems. Accounts on the internal database are restricted to a limited number of personnel, with logging in place to track all transactions.


##Person or Entity Authentication - 164.312(d)

Standard | Description
--------- | -----------
Person or Entity Authentication (Req) | Implement procedures to verify that a person or entity seeking access to ePHI is the one claimed.

Catalyze, Inc. has a formal policy that describes the process of verifying a person's identity before unlocking their account, resetting their password, and/or providing access to ePHI.


##Transmission Security - 164.312(e)(1)

Standard | Description
--------- | -----------
Integrity Controls (A) | Implement security measures to ensure that electronically transmitted ePHI is not improperly modified without detection.
Encryption (A) | Implement a mechanism to encrypt ePHI in transit.

All data in transit with Catalyze is sent over internet connections through an SSLv2/TLS1.2 encrypted mechanism. Load balancers segment the traffic and send transmissions of the data to the application servers via SSLv2 encryption. Additionally, none of the internal application servers, database servers, and log and monitoring servers are accessible via public internet. All internal servers must be accessed via bastion host which are not accessible from the internet and require an SSH connection.
