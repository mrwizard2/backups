package com.spd.cq.searspartsdirect.common.foundation;


import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.isA;
import static org.hamcrest.Matchers.not;
import static org.hamcrest.Matchers.nullValue;

import javax.jcr.RepositoryException;

import junit.framework.TestCase;

import org.junit.Before;
import org.junit.Test;

import com.adobe.granite.workflow.WorkflowException;
import com.spd.cq.searspartsdirect.common.fixture.ImageApprovalWorkflowProcessFixture;

public class ImageApprovalWorkflowProcessTest extends TestCase {

	private ImageApprovalWorkflowProcess process;
	private ImageApprovalWorkflowProcessFixture fixture;
	
	@Before
	protected void setUp() throws Exception {
		super.setUp();
		fixture = new ImageApprovalWorkflowProcessFixture();
		process = new ImageApprovalWorkflowProcess();
	}

	@Test
	public void testExecute() {
		try {
			fixture.setUpFullTest();
			process.execute(fixture.getTestItem(), fixture.getTestSession(), fixture.getArgs());
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	@Test
	public void testWrongPayloadType() {
		try {
			fixture.setUpWrongPayloadType();
			process.execute(fixture.getTestItem(), fixture.getTestSession(), fixture.getArgs());
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	@Test
	public void testNoSuchNode() {
		try {
			fixture.setUpNoSuchNode();
			process.execute(fixture.getTestItem(), fixture.getTestSession(), fixture.getArgs());
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	@Test
	public void testExceptionMoving() {
		try {
			fixture.setUpException();
			WorkflowException we = null;
			try {
				process.execute(fixture.getTestItem(), fixture.getTestSession(), fixture.getArgs());
			} catch (WorkflowException w) {
				we = w;
			}
			assertThat(we,is(not(nullValue())));
			assertThat((RepositoryException)we.getCause(),isA(RepositoryException.class));
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

}