import { defineStore } from 'pinia'

interface Factura {
    id?: number
    numeroFactura: string
    fecha: string
    clienteId: number
    items: FacturaItem[]
    total: number
    estado: 'pendiente' | 'pagada' | 'cancelada'
}

interface FacturaItem {
    producto: string
    cantidad: number
    precioUnitario: number
    subtotal: number
}

export const useFacturaStore = defineStore('factura', {
    state: () => ({
        facturas: [] as Factura[],
        facturaActual: null as Factura | null,
    }),

    actions: {
        async guardarFactura(factura: Factura) {
            try {
                // Aquí iría tu llamada API
                const response = await fetch('tu-api/facturas', {
                    method: 'POST',
                    body: JSON.stringify(factura),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const nuevaFactura = await response.json()
                this.facturas.push(nuevaFactura)
                return nuevaFactura
            } catch (error) {
                console.error('Error al guardar factura:', error)
                throw error
            }
        },
    }
})