'use strict'


const Document = use('App/Models/Document')
class DocumentController {

    async store({ request }) {

        const dataToCreate = request.only(['name', 'extension', 'size', 'directory', 'archives', 'fkUser']);

        return await Document.create(dataToCreate);

    }

    async list() {
        return await Document.all()
    }

    async show({ params }) {
        return await Document.find(params.id);
    }

    async update({ params, request }) {

        const document = await Document.find(params.id);

        const dataToUpdate = request.only(['name', 'extension', 'size', 'directory', 'archives', 'fkUser']);

        document.merge(dataToUpdate);

        await document.save();

        return document;
    }

    async delete({ params }) {

        const document = await Document.find(params.id);

        await document.delete();

        return {
            message: "Documento excluído"
        };

    }

}

module.exports = DocumentController
