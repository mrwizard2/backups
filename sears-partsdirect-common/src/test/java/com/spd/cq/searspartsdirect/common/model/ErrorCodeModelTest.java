package com.spd.cq.searspartsdirect.common.model;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import junit.framework.TestCase;

import org.junit.Before;
import org.junit.Test;

import com.spd.cq.searspartsdirect.common.model.spdasset.ErrorCodeModel;

public class ErrorCodeModelTest  extends TestCase {
	private ErrorCodeModel errorCodeModel;
	private String code = "code";
	private String condition = "condition";
	private String repairPath = "repairPath";
	private String path = "path";
	private String code2 = "code2";
	private String condition2 = "condition2";
	private String repairPath2 = "repairPath2";
	private String path2 = "path2";
	
	@Before
	protected void setUp() throws Exception {
		super.setUp();
		errorCodeModel = new ErrorCodeModel(path,code,condition,repairPath);
	}
	
	@Test
	public void testTagUsage() {
		try {
			assertThat(errorCodeModel.getCode(),is(code));
			assertThat(errorCodeModel.getCondition(),is(condition));
			assertThat(errorCodeModel.getRepairPath(),is(repairPath));
			assertThat(errorCodeModel.getPath(),is(path));
			errorCodeModel.setCode(code2);
			errorCodeModel.setCondition(condition2);
			errorCodeModel.setRepairPath(repairPath2);
			errorCodeModel.setPath(path2);
			assertThat(errorCodeModel.getCode(),is(code2));
			assertThat(errorCodeModel.getCondition(),is(condition2));
			assertThat(errorCodeModel.getRepairPath(),is(repairPath2));
			assertThat(errorCodeModel.getPath(),is(path2));
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}