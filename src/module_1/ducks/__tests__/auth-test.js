

import firebase from 'firebase';

import { put, call } from "redux-saga/effects"
import common from "common" // common library
import {
  addPersonRequest,
  addPerson,
  addPersionSaga
} from "../auth"


jest.mock('./firebase', () => {
  const set = jest.fn();
  return {
    database: jest.fn(() => ({
      ref: jest.fn(() => ({
        push: jest.fn(() => ({
          set,
        })),
      })),
    })),
  };
});

describe("auth duck", () => {
  it("signUp", () => {

    firebase.mockReturnValue({});

    const person = {
      firstName: "ivan",
      email: "test@test.com",
    }

    const saga = addPersionSaga(addPersonRequest(person))

    expect(saga.next().value).toEqual(call(common.helpers.generateId))
    const id = common.helpers.generateId()
    expect(saga.next(id).value).toEqual(put(addPerson(person, id)))
  })
})
