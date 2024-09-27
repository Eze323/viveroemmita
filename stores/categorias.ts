
import { defineStore } from "pinia";

interface IState {
    categorias: ICategoria[],
    mostrarFormulario: boolean
}

export const useCategoriaStore = defineStore('categorias', {
    state: (): IState => ({
        categorias: [],
        mostrarFormulario: false
    }),
    actions: {
        async obtener() {
            const { data, error } = await useFetch('/api/categorias/listar')
            if (!error.value) {
                this.categorias = (data.value as any).categorias
            }
        },
        async agregar(body: { nombre: string, descripcion: string, icono: string }) {
            const { data, error } = await useFetch('/api/categorias/agregar', {
                method: 'POST',
                body
            })
            if (!error.value) {
                this.categorias.push((data.value as any).categoria)
                navigateTo('/')
            }
        },
        async eliminar(id: string) {
            const { data, error } = await useFetch(`/api/categorias/${id}`, {
                method: 'DELETE',
            })
            if (!error.value) {
                this.categorias = this.categorias.filter(x => x._id !== id)
                navigateTo('/')
            }
        }
    }
})