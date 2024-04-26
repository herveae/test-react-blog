const News = () => {
    return ( 
        <div className="container-fluid news">
            <div className="row">
                <div className="col-lg-4 mx-auto">
                    <h3>Newsletter</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis velit corrupti accusantium?</p>
        
                    <form action="">
                        <div className="form-group">
                            <input 
                            type="text" 
                            className="form-control" 
                            placeholder="VotreAdresse@gmail.com" />
                        </div>
                        <div className="form-group">
                            <button 
                            type="submit" 
                            className="form-control mt-3 btn btn-success">S'inscrire</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
     );
}
 
export default News;
