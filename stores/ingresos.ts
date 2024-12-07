
import { defineStore } from "pinia";

interface IState {
    ingresos: IIngreso[],
    mostrarFormulario: boolean
}

export const useIngresoStore = defineStore('ingresos', {
    state: (): IState => ({
        ingresos: [],
        mostrarFormulario: false
    }),
    actions: {
        async obtener() {
            const { data, error } = await useFetch('/api/ingresos/listar')
            if (!error.value) {
                this.ingresos = (data.value as any).ingresos
            }
        },
        async agregar(body: { nombre: string, precio: number, descripcion: string, imagen: string }) {
            const { data, error } = await useFetch('/api/ingresos/agregar', {
                method: 'POST',
                body
            })
            if (!error.value) {
                this.ingresos.push((data.value as any).producto)
                navigateTo('/')
            }
        },
        async eliminar(id: string) {
            const { data, error } = await useFetch(`/api/ingresos/${id}`, {
                method: 'DELETE',
            })
            if (!error.value) {
                this.ingresos = this.ingresos.filter(x => x._id !== id)
                navigateTo('/')
            }
        }
    }
})
