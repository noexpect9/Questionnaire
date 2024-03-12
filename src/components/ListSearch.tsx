import { Input } from "antd";
import React, { FC, useEffect, useState } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
const { Search } = Input
const ListSearch: FC = () => {
  const [keyword, setKeyword] = useState('')
  const nav = useNavigate()
  const { pathname } = useLocation()
  const [searchParams] = useSearchParams()
  useEffect(() => {
    const currentValue = searchParams.get("keyword") || ''
    setKeyword(currentValue)
  }, [searchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }
  const handleSearch = (value: string) => {
    nav({
      pathname,
      search: `?keyword=${value}`
    })
  }
  return (
    <div>
      <Search placeholder="输入搜索内容" value={keyword} onChange={(e) => handleChange(e)} enterButton allowClear onSearch={handleSearch} />
    </div>
  )
}

export default ListSearch