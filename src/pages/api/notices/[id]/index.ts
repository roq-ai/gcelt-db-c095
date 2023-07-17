import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { noticeValidationSchema } from 'validationSchema/notices';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.notice
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getNoticeById();
    case 'PUT':
      return updateNoticeById();
    case 'DELETE':
      return deleteNoticeById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getNoticeById() {
    const data = await prisma.notice.findFirst(convertQueryToPrismaUtil(req.query, 'notice'));
    return res.status(200).json(data);
  }

  async function updateNoticeById() {
    await noticeValidationSchema.validate(req.body);
    const data = await prisma.notice.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteNoticeById() {
    const data = await prisma.notice.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
