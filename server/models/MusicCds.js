module.exports=(sequelize,DataTypes)=>{
    const MusicCds=sequelize.define("MusicCds",{
        album_name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        singer:{
            type:DataTypes.STRING,
            allowNull:false
        },
        composer_name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        launch_date:{
            type:DataTypes.DATE,
            allowNull:false
        },
        place:{
            type:DataTypes.STRING,
            allowNull:false
        },
        genre:{
            type:DataTypes.STRING,
            allowNull:false
        },
        record_label:{
            type:DataTypes.STRING,
            allowNull:false
        },
        total_track:{
            type:DataTypes.STRING,
            allowNull:false
        },
        duration:{
            type:DataTypes.TIME,
            allowNull:false
        },
        format:{
            type:DataTypes.STRING,
            allowNull:false
        },
        price:{
            type:DataTypes.BIGINT,
            allowNull:false
        }
        
    })

    return MusicCds
}