import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "../components/Modal";

const activeModalMock = {
    sprites: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    id: 1,
    name: "bulbasaur",
    types: [
        {
            type: {
                name: "grass",
                url: "https://pokeapi.co/api/v2/type/12/"
            }
        },

        {
            type: {
                name: "poison",
                url: "https://pokeapi.co/api/v2/type/4/"
            }
        },

    ],
    weight: 69,
    height: 7
}

const closeModalMock = jest.fn()

describe("Testando o modal", () => {

})