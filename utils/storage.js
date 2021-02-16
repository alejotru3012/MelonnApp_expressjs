const NodeCache = require( "node-cache" );
const myCache = new NodeCache();


const addOrder = (obj) => {

    let value = myCache.get( 'orders' );
    let result = {
        success: false,
        message: null
    };
    if ( value == undefined ){
        result.success = myCache.set( 'orders', [obj]);
        result.message = 'Orden creada';
        // console.log(myCache.get( 'orders' ));
    } else {
        const order = value.filter(odr => odr.external_order_number == obj.external_order_number)
        console.log(order);
        if (order.length != 0) {
            return {
                success: false,
                message: 'La orden ya existe'
            };
        }
        value.push(obj)
        result.success = myCache.set( 'orders', value);
        result.message = 'Orden creada';
        // console.log(myCache.get( 'orders' ))
    }
    return result;
}

const getOrders = () => {
    let value = myCache.get( 'orders' );
    if ( value == undefined ){
        return []
    }
    return value;
}

const getOrder = (id) => {
    const value = myCache.get( 'orders' );
    if ( value == undefined ){
        return []
    }
    const order = value.filter(obj => obj.external_order_number == id)
    // console.log(order[0])
    return (order[0] || []);
}


exports.getOrders = getOrders;
exports.getOrder = getOrder;
exports.addOrder = addOrder;
