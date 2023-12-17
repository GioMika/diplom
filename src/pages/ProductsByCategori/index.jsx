import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getProductsBycategory } from "../../request/allProducts"
import Products from "../../comonents/Products/Index"
import { useParams } from "react-router-dom"



function ProductsByCategori() {

  const { id } = useParams()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductsBycategory(id))
  }, [dispatch])

  const getByCategories = useSelector((state) => state.productByCategory.list)

  const categoryTitle = getByCategories.category;
  const getBycategoryesData = getByCategories?.data || [];

  return (
    <div>
      <h2>{categoryTitle?.title}</h2>
      <Products producsts={getBycategoryesData}/>
    </div>
  )
}

export default ProductsByCategori