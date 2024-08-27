package com.cl.dao;

import com.cl.entity.ShangpinqiugouEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.ShangpinqiugouView;


/**
 * 商品求购
 * 
 * @author 
 * @email 
 * @date 2024-04-12 13:01:17
 */
public interface ShangpinqiugouDao extends BaseMapper<ShangpinqiugouEntity> {
	
	List<ShangpinqiugouView> selectListView(@Param("ew") Wrapper<ShangpinqiugouEntity> wrapper);

	List<ShangpinqiugouView> selectListView(Pagination page,@Param("ew") Wrapper<ShangpinqiugouEntity> wrapper);
	
	ShangpinqiugouView selectView(@Param("ew") Wrapper<ShangpinqiugouEntity> wrapper);
	

}
