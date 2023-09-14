import { render, screen } from "@testing-library/react"
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

    test("Deve renderizar os elementos do modal", () => {

        render(
            <Modal activeModal={activeModalMock} closeModal={closeModalMock}/>
        )

        const urlImage = screen.getByRole('img', {name: /bulbasaur/i})
        const id = screen.getByRole('heading', {name: /#1 bulbasaur/i})
        const name = screen.getByText(/bulbasaur/i)
        const typeGrass = screen.getByText(/grass/i)
        const typePoison = screen.getByText(/poison/i)
        const weight = screen.getByText(/6\.9 kg/i)
        const height = screen.getByText(/0\.7 m/i)
        const buttonClose = screen.getByRole('button', {name: /❌/i})


        expect(urlImage).toBeInTheDocument()
        expect(id).toBeInTheDocument()
        expect(name).toBeInTheDocument()
        expect(typeGrass).toBeInTheDocument()
        expect(typePoison).toBeInTheDocument()
        expect(weight).toBeInTheDocument()
        expect(height).toBeInTheDocument()
        expect(buttonClose).toBeInTheDocument()

        screen.logTestingPlaygroundURL()
    })
})