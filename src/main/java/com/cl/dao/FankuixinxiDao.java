package com.cl.dao;

import com.cl.entity.FankuixinxiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.FankuixinxiView;


/**
 * 反馈信息
 * 
 * @author 
 * @email 
 * @date 2024-04-12 13:01:16
 */
public interface FankuixinxiDao extends BaseMapper<FankuixinxiEntity> {
	
	List<FankuixinxiView> selectListView(@Param("ew") Wrapper<FankuixinxiEntity> wrapper);

	List<FankuixinxiView> selectListView(Pagination page,@Param("ew") Wrapper<FankuixinxiEntity> wrapper);
	
	FankuixinxiView selectView(@Param("ew") Wrapper<FankuixinxiEntity> wrapper);
	

}
