import {Console} from "@woowacourse/mission-utils";

export const input = async (message) => {
    return await Console.readLineAsync(message)
}

export const output = async (message) => {
    return await Console.readLineAsync(message)
}