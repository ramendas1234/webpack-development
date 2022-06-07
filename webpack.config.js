const path = require( 'path' );
module.exports = {
    entry: './src/index.js',
    mode: 'development',
	output: {
		path: path.resolve( __dirname, 'dist' ),
        filename: 'bundle.js',
		
	},
    devServer: {
        //contentBase: './dist',
        static: {
            directory: path.join(__dirname, 'dist'),
          },
        compress: true,
        port: 9000,
    }    
}