module.exports = function(sequelize , dataTypes){
    
    let alias = "Producto"
    let cols = {
             id:{
                 type: dataTypes.INTEGER,
                 primaryKey: true,
                 autoIncrement: true
             },
             imagen:{
                type: dataTypes.STRING
            },
             prenda:{
                type: dataTypes.STRING
            },
             marca:{
                type: dataTypes.STRING
            },
             talle:{
                type: dataTypes.STRING
            },
            color:{
                type: dataTypes.STRING
            },
            sexo:{
                type: dataTypes.STRING
            },
            precio:{
                type: dataTypes.INTEGER
            },
            detalle:{
                type: dataTypes.STRING
            }
    }
    let config = {
            tableName:"productos",
            timestamps: false
    }

    let Producto = sequelize.define(alias, cols, config)
    
    return Producto
}