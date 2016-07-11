# ng2Fullstack
[![Build Status](https://secure.travis-ci.org/schejken/ng2Fullstack.png?branch=master)](https://travis-ci.org/schejken/ng2Fullstack)
[![Coverage Status](https://coveralls.io/repos/schejken/ng2Fullstack/badge.svg?branch=master)](https://coveralls.io/r/schejken/ng2Fullstack/?branch=master)

# Mongo db terminal commad
sudo mongod --dbpath /data/db

# Dev terminal command
Run: sudo npm run dev

# Generators:

Client

Component:

$ yo ng-fullstack:component user --feature person
This will create:

client/dev/person/components/user.ts
client/dev/person/templates/user.html 
client/dev/person/styles/user.css 
tests/client/person/components/user_test.ts 
Controller:

$ yo ng-fullstack:controller doctor --feature medic
This will create:

client/dev/medic/controllers/doctor.js 
tests/client/medic/controllers/doctor_test.js 
Directive

$ yo ng-fullstack:directive i-toggle-stuff --feature common
This will create:

client/dev/common/directives/i-toggle-stuff.js 
tests/client/common/directives/i-toggle-stuff_test.js 
Service

$ yo ng-fullstack:service http-parser --feature lib
This will create:

client/dev/lib/services/http-parser.js 
tests/client/lib/services/http-parser_test.js 
Filter

$ yo ng-fullstack:filter myFilter --feature common
This will create:

client/dev/common/filters/myFilter.js 
tests/client/common/filters/myFilter_test.js 
Factory

$ yo ng-fullstack:factory student --feature school
This will create:

client/dev/school/factory/student.js 
tests/client/school/factory/student_test.js 
Resource

$ yo ng-fullstack:resource clazz --feature clazz
This will create:

client/dev/clazz/resource/clazz.js 
Decorator

$ yo ng-fullstack:decorator q-extender --feature next-q
This will create:

client/dev/next-q/decorator/q-extender.js 
Module:

$ yo ng-fullstack:module user --feature family
This will create:

client/dev/family/factory/user.ts
client/dev/family/services/user.ts
client/dev/family/models/user.ts
client/dev/family/components/user.ts
client/dev/family/directives/user.ts
client/dev/family/styles/user.css
client/dev/family/templates/user.html

tests/client/family/factory/user_test.ts
tests/client/family/components/user_test.ts
tests/client/family/services/user_test.ts
tests/client/family/models/user_test.ts
tests/client/family/directives/user_test.ts
server

Endpoint:


$ yo ng-fullstack:endpoint skate --feature skateboard

This will create (node):

server/api/skateboard/controller/skate-controller.js 
server/api/skateboard/route/skate-route.js 
server/api/skateboard/dao/skate-dao.js 
server/api/skateboard/model/skate-model.js 
tests/server/skateboard/dao/skate-dao_test.js