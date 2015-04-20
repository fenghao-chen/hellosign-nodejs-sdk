Hellosign NodeJS SDK
-------------------


A NodeJS / JavaScript wrapper for the [HelloSign API](http://www.hellosign.com/api)

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Modules](#modules)
- [Tests](#tests)
- [Additional Notes](#additional-notes)


## Installation

Install from code:
````sh
git clone https://github.com/HelloFax/hellosign-nodejs-sdk.git
cd hellosign-nodejs-sdk
# install dependencies
npm install
````

NPM install coming soon.

## Configuration

In your Node application, require `hellosign.js` and pass authentication information to initialize it:

````javascript
// Initialize using api key
var hellosign = require('./hellosign.js')({key: 'YOUR API KEY HERE'});

OR

// Initialize using email and password
var hellosign = require('./hellosign.js')({username: 'your_email_address', password: 'your_password'});

OR

// Initialize for embedded requests using your api key, client id, and (optionally, for OAuth) client secret
var hellosign = require('./hellosign.js')({key: 'YOUR API KEY HERE', client_id: 'your client id', client_secret: 'your client secret'});

````

## Usage

Each function in the SDK is called from your initialized hellosign object, followed by the module name, and then the method.

```javascript
    hellosign.template.list();
```

See [below](#modules) for a list of modules and their associated endpoint methods.

### Return values

The results of each method can be accessed either as a callback, or a promise:

Callback style responses are included as the last (or only, in the case of no others) parameter in a call:

```javascript
hellosign.signatureRequest.send({/*options*/}, function(err, response){
    if (err) {
        //do something with error
    } else {
        //parse response
    }
});
```

Promise style access is through the [when](https://github.com/cujojs/when) library:

```javascript
hellosign.signatureRequest.send({/*options*/})
    .then(function(response){
        //parse response
    })
    .catch(function(err){
        //do something with error
    })
    .finally(function(){
        //optionally do yet another thing
    });
```

Returned promises are then-able, or can be returned for later resolution.


## Modules

Modules in the SDK are as follows:

- [Account](#account)
- [Signature Request](#signature-request)
- [Embedded](#embedded)
- [OAuth](#oauth)
- [Team](#team)
- [Template](#template)
- [Unclaimed Draft](#unclaimed-draft)

### Account

#### Get current account information

````javascript
hellosign.account.get()
    .then();
````

#### Update your account information

````javascript
var new_callback_url = "https://www.example.com/callback"
hellosign.account.update({callback_url: new_callback_url})
    .then();
````

#### Create a new HelloSign account

````javascript
var email: "new_user@example.com";
var password: "aL0ngL0ngPa55w0rd";

hellosign.account.create({
    email_address: email,
    password: password
})
.then();
````

#### Verify if an account exists (only for paid API users)

````javascript
var email: "possibly_existing_user@example.com";
var account_id: '12738igfe87egqo22';

hellosign.account.verify({email_address: email,})
.then();

hellosign.account.verify({account_id: email,})
.then();
````

### Signature Request


#### Get an existing Signature Request by ID

````javascript
hellosign.signatureRequest.get("fa5c8a0b0f492d768749333ad6fcc214c111e967")
.then();
````

#### Get a list of your Signature Requests

````javascript
hellosign.signatureRequest.list()
  .then(function(res){
    console.log(res.signature_requests);
  });
````

#### Send a Signature Request

````javascript
var options = {
    test_mode : 1,
    title : 'NDA with Acme Co.',
    subject : 'The NDA we talked about',
    message : 'Please sign this NDA and then we can discuss more. Let me know if you have any questions.',
    signers : [
          {
            email_address : 'jack@example.com',
            name : 'Jack',
            order : 0,
          },
          {
            email_address : 'jill@example.com',
            name : 'Jill',
            order : 1,
          }
        ],
    cc_email_addresses : ['lawyer@example.com', 'lawyer2@example.com'],
    files : ['my/docs/nda.pdf'],
    metadata : {
                  clientId : '1234',
                  custom_text : 'NDA #9'
        }
};

hellosign.signatureRequest.send(options)
      .then(function(res){
        console.log(res.signature_request);
      });
````

#### Send a Signature Request with Template

````javascript
var options = {
   test_mode : 1,
   template_id : '7b63c2131099ef7effeb0e980e2c42005fe3405d',
   subject : 'Purchase Order',
   message : 'Glad we could come to an agreement.',
   signers : [
     {
       email_address : 'george@example.com',
       name : 'George',
       role : 'Signer'
     }
   ]
};

hellosign.signatureRequest.sendWithTemplate(options);
  .then(function(res){
    console.log(res.signature_request);
  });
````

#### Send a reminder about an outstanding signature request
````javascript
var request_id = 'fa5c8a0b0f492d768749333ad6fcc214c111e967'
var email = 'thedude@abides.com'
hellosign.signatureRequest.remind(request_id,{email_address : email})
    .then(function(res){
        console.log(res.signature_request);
    });
````

#### Download files from a signature request
````javascript
var request_id = 'fa5c8a0b0f492d768749333ad6fcc214c111e967'
hellosign.signatureRequest.download(request_id, {file_type: 'zip'}, function(err, response) {
    var file = fs.createWriteStream("files.zip");
    response.pipe(file);
    file.on('finish', function() {
      file.close();
    });
});
````

#### Cancel an outstanding signature request
````javascript
var request_id = 'fa5c8a0b0f492d768749333ad6fcc214c111e967';
hellosign.signatureRequest.cancel(request_id);
````

#### Send an embedded signature request
````javascript
var options = {
  test_mode : 1,
  clientId : '0836272d66a1b53f9822f3aa07aef704',
  title : 'NDA with Acme Co.',
  subject : 'The NDA we talked about',
  message : 'Please sign this NDA and then we can discuss more. Let me know if you have any questions.',
  signers : [
    {
      email_address : 'jack@example.com',
      name : 'Jack',
      order : 0,
    },{
      email_address : 'jill@example.com',
      name : 'Jill',
      order : 1,
    }
  ],
  cc_email_addresses : ['lawyer@example.com', 'lawyer@example2.com'],
  files : ['my/files/nda.pdf']
};

hellosign.signatureRequest.createEmbedded(options)
  .then(function(res){
    console.log(res.signature_request);
  });

````

#### Send an embedded signature request with a template
````javascript
var options = {
   test_mode : 1,
   clientId : '0836272d66a1b53f9822f3aa07aef704',
   template_id : '7b63c2131099ef7effeb0e980e2c42005fe3405d',
   subject : 'Purchase Order',
   message : 'Glad we could come to an agreement.',
   signers : [
     {
       email_address : 'george@example.com',
       name : 'George',
       role : 'Signer'
     }
   ]
};

hellosign.signatureRequest.createEmbeddedWithTemplate(options);
  .then(function(res){
    console.log(res.signature_request);
  });
````

### Embedded

#### Get an embedded sign URL
````javascript
var signature_id = 'fa5c8a0b0f492d768749333ad6fcc214c111e967';
hellosign.embedded.getSignUrl(signature_id)
    .then();
````

#### Get an embedded template's edit URL
````javascript
var template_id = '7b63c2131099ef7effeb0e980e2c42005fe3405d';
hellosign.embedded.getEditUrl(template_id)
    .then();
````

### OAuth

TBD

### Team

#### Get your team's information
````javascript
hellosign.team.get()
    .then(function(res){
        console.log(res.team);
    });
````

#### Create a team (if you don't have one)
````javascript
var team_name = 'Radion 6'
hellosign.team.create({name: team_name})
  .then(function(res){
    console.log(res.team);
  });
````

#### Update team
````javascript
var newName = 'The Mr. T Team';
hellosign.team.update({name: newName})
  .then(function(res){
    console.log(res.team);
  });
````

#### Remove team
````javascript
hellosign.team.destroy();
````

#### Add a team member
````javascript
var memberEmail = 'benedict@cumberbatch.org';
hellosign.team.addMember({email_address: memberEmail})
  .then(function(res){
    console.log(res.team);
  });
````

#### Remove a team member
````javascript
var memberEmail = 'benedictinemonk@cumberbatch.org';
hellosign.team.removeMember({email_address: memberEmail})
    .then(function(res){
      console.log(res.team);
    });
````

### Template

#### List current templates
````javascript
hellosign.template.list();
    .then(function(res){
        console.log(res.templates);
    }
````

#### Get a template by id
````javascript
var template_id = '7b63c2131099ef7effeb0e980e2c42005fe3405d';
hellosign.template.get(template_id)
    .then(function(res){
        console.log(res.template);
    });
````

#### Add a team member to a template
````javascript
var template_id = '7b63c2131099ef7effeb0e980e2c42005fe3405d';
var memberEmail = 'robin@batman.com'
hellosign.template.addUser(
        template_id,
        {
          email_address: memberEmail
        }
    )
    .then(function(res){
      console.log(res.template);
    });
````

#### Remove a team member from a template
````javascript
var template_id = '7b63c2131099ef7effeb0e980e2c42005fe3405d';
var memberEmail = 'othersidekick@batman.com'
hellosign.template.removeUser(
        template_id,
        {
          email_address: memberEmail
        }
    )
    .then(function(res){
      console.log(res.template);
    });
````

#### Create an embedded template draft
````javascript
var options = {
    test_mode: 1,
    files: ['my/files/nda.pdf'],
    title: 'embedded draft test',
    subject: 'embedded draft test',
    message: 'embedded draft test',
    signer_roles: [
        {
            name: 'Sherlock',
            order: 0
        },{
            name: 'Watson',
            order: 1
        }
    ],
    cc_roles: ['commissioner@metropolice.gov.uk']
};

var results = hellosign.template.createEmbeddedDraft(options)
    .then(function(res){
        console.log(res.template);
    });
````

### Unclaimed Draft

#### Create an unclaimed draft
````javascript
hellosign.unclaimedDraft.create({
        test_mode : 1,
        files : ['my/files/nda.pdf', 'other/files/secret.pdf']
        })
        .then(function(res){
            console.log(res.unclaimed_draft.claim_url);
        });
````

#### Create an embedded unclaimed draft
````javascript
var options = {
    test_mode : 1,
    clientId : '0836272d66a1b53f9822f3aa07aef704',
    type : 'request_signature',
    subject : 'The NDA we talked about',
    requester_email_address : 'jack@hellosign.com',
    files : ['my/secret/lair/nda.pdf'],
    is_for_embedded_signing : 1
};

hellosign.unclaimedDraft.createEmbedded(options)
    .then(function(res){
        console.log(res.unclaimed_draft.claim_url);
    });
````

#### Create embedded unclaimed draft with template
````javascript
var options = {
    test_mode: 1,
    template_id: '7b63c2131099ef7effeb0e980e2c42005fe3405d',
    title: 'embedded draft test',
    subject: 'embedded draft test',
    message: 'embedded draft test',
    signing_redirect_url: 'http://bondstreet.co.uk',
    requesting_redirect_url: 'http://met.police.uk',

    signers: [
        {
            name: 'Sherlock',
            role: 'Signer',
            email_address: 'sherlock@holmesdetective.co.uk',
            pin: 3645
        },{
            name: 'Watson',
            role: 'Assistant',
            email_address: 'watson@holmesdetective.co.uk',
            pin: 4657
        }
    ],
    requester_email_address: 'mrshudson@landlady.com',
    metadata: {
        clue1: 'pink suitcase',
        clue2: 'rache...'
    }
};

hellosign.unclaimedDraft.createEmbeddedWithTemplate(options);
    .then(function(res){
        console.log(res.unclaimed_draft.claim_url);
    });
````

## Tests

Unit tests can be run simply by executing:
````sh
npm test
````

You can run the full test suite (including functional tests) by executing the following commands after you cloned the repo:
Note that it requires to have a HelloSign account, with two templates (each having a single signer role, titled 'Signer') and one api app.

**WARNING:** We advise against running those tests against your personal account as it performs destructive actions.

````sh
cd hellosign-nodejs-sdk
cp test/testparams.example.js test/testparams.js

# In testparams.js, edit
var api_key = 'YOUR API KEY';
var client_id = 'YOUR CLIENT ID';
var client_secret = 'SECRET';

# Then run the mocha instance from node_modules:

node_modules/mocha/bin/mocha
````

## Additional notes

### Local callbacks
We do not allow app callbacks (event or OAuth) to be set to localhost. However it is still possible to test callbacks against a local server. Tunneling services such as ngrok (http://ngrok.com) can help you set this up.
