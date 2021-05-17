import { findElements, findOneElement } from './../../lib/db-operations';
import { IResolvers } from 'graphql-tools';
import { COLLECTIONS, MESSAGES, } from './../../config/constants';
import JWT from './../../lib/jwt';
import { EXPIRETIME } from '../../config/constants';
import bcrypt from 'bcrypt';
import UsersService from '../../services/users.service';
const resolversUserQuery: IResolvers = {
    Query: {
        async users(_, __, context) {
            return new UsersService(_, __, context).items();
        },

        async login(_, { email, password }, context) {
            return new UsersService(_, { user: { email, password}}, context).login();
        },
        me(_, __, { token }) {
            return new UsersService(_, __, {token}).auth();
        }
    },
};

export default resolversUserQuery;