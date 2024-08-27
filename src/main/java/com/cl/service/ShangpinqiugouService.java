package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.ShangpinqiugouEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.ShangpinqiugouView;


/**
 * 商品求购
 *
 * @author 
 * @email 
 * @date 2024-04-12 13:01:17
 */
public interface ShangpinqiugouService extends IService<ShangpinqiugouEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<ShangpinqiugouView> selectListView(Wrapper<ShangpinqiugouEntity> wrapper);
   	
   	ShangpinqiugouView selectView(@Param("ew") Wrapper<ShangpinqiugouEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<ShangpinqiugouEntity> wrapper);
   	

}

