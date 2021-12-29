"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupModule = void 0;
const user_repository_1 = require("./user.repository");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const signup_controller_1 = require("./signup.controller");
const signup_service_1 = require("./signup.service");
let SignupModule = class SignupModule {
};
SignupModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_repository_1.UserRepository])],
        controllers: [signup_controller_1.SignupController],
        providers: [signup_service_1.SignupService],
    })
], SignupModule);
exports.SignupModule = SignupModule;
//# sourceMappingURL=signup.module.js.map