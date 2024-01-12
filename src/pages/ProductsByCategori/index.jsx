import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getProductsBycategory } from "../../request/allProducts"
import Products from "../../comonents/Products/Index"
import { useParams } from "react-router-dom"
import styles from './styles.module.css'
import SortForm from "../../comonents/FilterForms/SortForm"


function ProductsByCategori() {
  const { id } = useParams()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductsBycategory(id))
  }, [])

  const getByCategories = useSelector((state) => state.productByCategory.list)
  console.log(getByCategories);
  const categoryTitle = getByCategories.category;
const categoryT = categoryTitle?.title
  const getBycategoryesData = getByCategories?.data || [];

  return (
    <div>
     <SortForm />
      <Products products={getBycategoryesData}/>
    </div>
  )
}

export default ProductsByCategori