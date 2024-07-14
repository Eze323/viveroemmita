import { defineStore } from "pinia";


interface IState {
    productos: IProducto[],
    mostrarFormulario: boolean

}

export const useProductoStore = defineStore('productos', {
    state: (): IState => ({
        productos: [],
        mostrarFormulario: false
    }),
    actions: {
        async obtener() {
            const { data, error } = await useFetch('/api/productos/listar')
            this.productos = (data.value as any).productos

        },

        async agregar(body: { nombre: string, precio: number, descripcion: string, imagen: string }) {
            const { data, error } = await useFetch('/api/productos/agregar', {
                method: 'POST',
                body
            })
            navigateTo('/')


        },
        async eliminar(id: string) {
            const { data, error } = await useFetch(`/api/productos/${id}`, {
                method: 'DELETE',
            })
            this.productos = this.productos.filter(x => x._id !== id)
            navigateTo('/')
        },
        // async actualizar(id:string, producto:IProducto){
        //     const {data,error} = await useFetch(`/api/productos/actualizar/${id}`,{
        //         method:'PUT',
        //         body:producto
        //         })
        //         navigateTo('/')
        // }
        // async buscarProducto(id:string){
        //     const {data,error} = await useFetch(`/api/productos/${id}`)
        //     this.producto=(data.value as any).productos


        // },
    }
})
