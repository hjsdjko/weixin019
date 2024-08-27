package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.FankuixinxiEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.FankuixinxiView;


/**
 * 反馈信息
 *
 * @author 
 * @email 
 * @date 2024-04-12 13:01:16
 */
public interface FankuixinxiService extends IService<FankuixinxiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<FankuixinxiView> selectListView(Wrapper<FankuixinxiEntity> wrapper);
   	
   	FankuixinxiView selectView(@Param("ew") Wrapper<FankuixinxiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<FankuixinxiEntity> wrapper);
   	

}

