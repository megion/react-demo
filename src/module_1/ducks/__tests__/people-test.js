import { put, call } from "redux-saga/effects"
import common from "common" // common library
import {
  addPersonRequest,
  addPerson,
  addPersionSaga
} from "../people"

describe("people duck", () => {
  it("addPersionSaga", () => {
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
